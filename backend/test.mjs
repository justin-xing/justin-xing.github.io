// node --test test.mjs
import assert from "node:assert/strict";
import test from "node:test";

import { formatDate, markdown } from "./src/index.mjs";

const rt = (plain_text, annotations = {}, href = null) => ({ plain_text, href, annotations });
const b = (type, rich_text) => ({ type, [type]: { rich_text } });

test("markdown", () => {
  const md = markdown([
    b("heading_2", [rt("Hi")]),
    b("heading_4", [rt("Small")]),
    b("paragraph", [rt("so "), rt("bold ", { bold: true }), rt("link", {}, "https://x.com")]),
    b("bulleted_list_item", [rt("a")]),
    b("bulleted_list_item", [rt("b")]),
    { type: "unsupported", unsupported: {} },
    { type: "divider", divider: {} },
    { type: "image", image: { type: "file", file: { url: "https://img/Shot (1).png" }, caption: [rt("cap [x]")] } },
  ]);
  assert.equal(
    md,
    "## Hi\n\n#### Small\n\nso **bold** [link](https://x.com)\n\n- a\n- b\n\n---\n\n![cap x](<https://img/Shot (1).png>)"
  );
});

test("rich text", () => {
  // Same-style runs merge; italics use * so they work mid-word.
  const md = markdown([
    b("paragraph", [rt("foo", { bold: true }), rt("bar", { bold: true }), rt(" un"), rt("believ", { italic: true }), rt("able")]),
  ]);
  assert.equal(md, "**foobar** un*believ*able");
});

test("formatDate", () => {
  assert.equal(formatDate("2026-09-10"), "09/10/26");
  assert.equal(formatDate("2026-09-10T12:00:00.000Z"), "09/10/26");
});
