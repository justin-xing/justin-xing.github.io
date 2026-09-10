// Blog content lives here. Newest post first — order in this array is the order
// on the page, same as NEWS_ENTRIES in pages/about/components/NewsCard.js.
//
// `body` is Markdown: **bold**, _italic_, [links](https://example.com),
// ## headings, - lists, `code`, > quotes, and ![alt](/blog-images/foo.jpg)
// for images (put the file in public/blog-images/).
//
// Keep the Markdown flush against the left margin. Indenting a line by four
// spaces makes it a code block, which is rarely what you meant.

export const POSTS = [
  {
    id: "placeholder-one",
    icon: "✍️",
    title: "Placeholder Post One",
    date: "08/25/26",
    body: `
TODO: replace this with real writing. This paragraph exists so the card has
enough content to clip, which is what makes the fade at the bottom of the
preview visible before you click through.

The card shows roughly the first few lines, then the text dissolves into the
card background. Hitting READ MORE opens the full post on its own page.

## Markdown works here

Body text supports **bold**, _italic_, \`inline code\`, and
[links](https://example.com). Lists work too:

- First item
- Second item
- Third item

> And block quotes, for when you are quoting someone.

TODO: delete this post once there is something real to put here.
`,
  },
  {
    id: "placeholder-two",
    icon: "🛠️",
    title: "Placeholder Post Two",
    date: "08/18/26",
    body: `
TODO: replace this with real writing. A second card is useful for checking the
spacing between cards and confirming that one card does not disturb the others.

Posts are plain objects in posts.js, so adding one is a matter of appending to
the array at the top of the file. No build step, no external embed — just a
Markdown string.

The icon is an emoji string, which keeps things dependency free while still
giving each post a bit of identity in the header.
`,
  },
  {
    id: "placeholder-three",
    icon: "🌏",
    title: "Placeholder Post Three",
    date: "08/11/26",
    body: `
TODO: replace this with real writing. A short post is worth keeping around as a
test case, because if the body is shorter than the collapsed height there is
nothing to fade.

In that case the card should still look correct: no fade overlay, just the full
text.
`,
  },
];

export const getPostById = (id) => POSTS.find((post) => post.id === id);
