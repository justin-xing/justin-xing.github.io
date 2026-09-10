// Blog content lives here. Newest post first — order in this array is the order
// on the page, same as NEWS_ENTRIES in pages/about/components/NewsCard.js.
//
// Each `body` entry is one paragraph. Plain strings are fine; a JSX fragment
// works too if you need a link, e.g.
//   <>I wrote about it <a href="..." target="_blank" rel="noreferrer">here</a>.</>

export const POSTS = [
  {
    id: "placeholder-one",
    icon: "✍️",
    title: "Placeholder Post One",
    date: "08/25/26",
    body: [
      "TODO: replace this with real writing. This paragraph exists so the card has enough content to clip, which is what makes the fade at the bottom of the preview visible before you click through.",
      "The card shows roughly the first few lines, then the text dissolves into the card background. Hitting READ MORE opens the full post on its own page.",
      "Everything below this line is only visible on the post page, so it is a decent place to check that the page renders long posts correctly.",
      "TODO: delete this post once there is something real to put here.",
    ],
  },
  {
    id: "placeholder-two",
    icon: "🛠️",
    title: "Placeholder Post Two",
    date: "08/18/26",
    body: [
      "TODO: replace this with real writing. A second card is useful for checking the spacing between cards and confirming that one card does not disturb the others.",
      "Posts are plain objects in posts.js, so adding one is a matter of appending to the array at the top of the file. No build step, no markdown parser, no external embed.",
      "The icon is just an emoji string, which keeps the whole thing dependency free while still giving each post a bit of identity in the header.",
    ],
  },
  {
    id: "placeholder-three",
    icon: "🌏",
    title: "Placeholder Post Three",
    date: "08/11/26",
    body: [
      "TODO: replace this with real writing. A short post is worth keeping around as a test case, because if the body is shorter than the collapsed height there is nothing to fade.",
      "In that case the card should still look correct: no fade overlay, just the full text.",
    ],
  },
];

export const getPostById = (id) => POSTS.find((post) => post.id === id);
