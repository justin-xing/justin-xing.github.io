// Serves the published pages of a Notion database as blog posts, in the same
// { id, icon, title, date, body } shape (plus `url`, which may be null) as POSTS in
// frontend/src/pages/blog/posts.js. `body` is Markdown.
//
// CORS headers are added by the Function URL config in template.yaml, not
// here; setting them in both places sends duplicates and the browser rejects
// the response.

const NOTION = "https://api.notion.com/v1";
const HEADERS = {
  Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

// Notion's image URLs expire after an hour, so this must stay well under that.
const CACHE_MS = 5 * 60 * 1000;
// If Notion is failing, keep serving the last good list only while its image
// URLs are still valid.
const STALE_MS = 50 * 60 * 1000;
let cache; // { at, body }, survives between invocations on a warm instance

const notion = async (path, body, retries = 3) => {
  const res = await fetch(NOTION + path, {
    method: body ? "POST" : "GET",
    headers: HEADERS,
    body: body && JSON.stringify(body),
  });
  // Notion allows ~3 requests/s and says how long to back off when exceeded.
  if (res.status === 429 && retries > 0) {
    const seconds = Number(res.headers.get("retry-after")) || 1;
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    return notion(path, body, retries - 1);
  }
  if (!res.ok) throw new Error(`Notion ${res.status} on ${path}: ${await res.text()}`);
  return res.json();
};

// Notion pages results 100 at a time. POST endpoints take the cursor in the
// body, GET endpoints in the query string.
const all = async (path, body) => {
  const results = [];
  let cursor;
  do {
    const page = body
      ? await notion(path, { ...body, start_cursor: cursor })
      : await notion(cursor ? `${path}?start_cursor=${cursor}` : path);
    results.push(...page.results);
    cursor = page.next_cursor;
  } while (cursor);
  return results;
};

const plain = (rich) => rich.map((t) => t.plain_text).join("");

// Markers go inside the surrounding whitespace: Notion often bolds "word "
// with its trailing space, and "**word **" is not bold in Markdown.
const wrap = (s, mark) => {
  const [, before, core, after] = s.match(/^(\s*)(.*?)(\s*)$/s);
  return core ? before + mark + core + mark + after : s;
};

const text = (rich) => {
  // Notion splits text into runs whenever any style changes, including ones
  // dropped here (color, underline). Merge neighbours with the same output
  // style first, or two bold runs become "**a****b**", which isn't bold.
  const runs = [];
  for (const { plain_text, href, annotations: a } of rich) {
    const key = [a.code, a.bold, a.italic, href].join();
    const last = runs[runs.length - 1];
    if (last?.key === key) last.s += plain_text;
    else runs.push({ key, s: plain_text, a, href });
  }
  return runs
    .map(({ s, a, href }) => {
      if (a.code) s = wrap(s, "`");
      if (a.bold) s = wrap(s, "**");
      if (a.italic) s = wrap(s, "*"); // "_" isn't emphasis mid-word
      if (href) s = `[${s}](${href})`;
      return s;
    })
    .join("");
};

const block = (b) => {
  const v = b[b.type];
  // heading_1 through heading_4 (Notion has four levels) -> # through ####
  if (b.type.startsWith("heading_")) {
    return `${"#".repeat(b.type.slice(-1))} ${text(v.rich_text)}`;
  }
  switch (b.type) {
    case "paragraph":
      return text(v.rich_text);
    case "bulleted_list_item":
      return `- ${text(v.rich_text)}`;
    case "numbered_list_item":
      return `1. ${text(v.rich_text)}`; // Markdown renumbers the list itself
    case "quote":
      return `> ${text(v.rich_text).replace(/\n/g, "\n> ")}`;
    case "code":
      return "```" + v.language + "\n" + plain(v.rich_text) + "\n```";
    case "divider":
      return "---";
    case "image":
      // <url> so spaces and parentheses in an uploaded file's name don't end
      // the link early; brackets in the caption would end the alt text.
      return `![${plain(v.caption).replace(/[[\]]/g, "")}](<${v[v.type].url}>)`;
    default:
      // ponytail: toggles, tables, embeds and nested children are dropped; add
      // cases here when a real post uses them.
      console.warn(`Skipping unsupported Notion block: ${b.type}`);
      return null;
  }
};

// Blocks are separated by blank lines, except consecutive items of the same
// list, which a blank line would turn into a "loose" list of paragraphs.
export const markdown = (blocks) => {
  let md = "";
  let prev;
  for (const b of blocks) {
    const s = block(b);
    if (s === null) continue;
    const sameList = b.type.endsWith("list_item") && prev === b.type;
    md += md ? (sameList ? "\n" : "\n\n") + s : s;
    prev = b.type;
  }
  return md;
};

// Only well-formed http(s) links, so the frontend can render them as-is.
const httpUrl = (s) => {
  try {
    const url = new URL(s);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
};

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// "2026-09-10" (or a full timestamp) -> "09/10/26", the format the site uses.
export const formatDate = (iso) => {
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${m}/${d}/${y.slice(2)}`;
};

const toPost = async (page) => {
  const p = page.properties;
  // Titles can contain Notion soft line breaks; a title is one line.
  const title = plain(Object.values(p).find((x) => x.type === "title").title)
    .replace(/\s+/g, " ")
    .trim();
  return {
    // Slugified even when set by hand, so it is always a single URL segment;
    // a title with no Latin letters or digits falls back to the page id.
    id: slugify((p.Slug?.rich_text && plain(p.Slug.rich_text)) || title) || page.id,
    icon: page.icon?.type === "emoji" ? page.icon.emoji : "📝",
    title,
    date: formatDate(p.Date?.date?.start ?? page.created_time),
    // A "URL" property, as either Notion's URL type or plain text.
    url: httpUrl(p.URL?.url || (p.URL?.rich_text && plain(p.URL.rich_text))),
    body: markdown(await all(`/blocks/${page.id}/children`)),
  };
};

export const handler = async () => {
  if (!cache || Date.now() - cache.at > CACHE_MS) {
    try {
      const pages = await all(`/databases/${process.env.NOTION_DATABASE_ID}/query`, {
        filter: { property: "Published", checkbox: { equals: true } },
        sorts: [{ property: "Date", direction: "descending" }],
      });
      // ponytail: one request per post at once, leaning on the 429 retry in
      // notion(); with dozens of posts, fetch them in small batches instead.
      const posts = await Promise.all(pages.map(toPost));
      cache = { at: Date.now(), body: JSON.stringify(posts) };
    } catch (err) {
      console.error(err);
      // A stale list beats an error page, until its image URLs have expired.
      if (!cache || Date.now() - cache.at > STALE_MS) {
        return { statusCode: 502, body: JSON.stringify({ error: "Could not load posts" }) };
      }
    }
  }
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "max-age=300" },
    body: cache.body,
  };
};
