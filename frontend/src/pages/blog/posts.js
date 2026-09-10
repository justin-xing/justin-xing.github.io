// Blog content lives here. Newest post first — order in this array is the order
// on the page, same as NEWS_ENTRIES in pages/about/components/NewsCard.js.
//
// `body` is Markdown: **bold**, _italic_, [links](https://example.com),
// ## headings, - lists, `code`, > quotes.
//
// Images: put the file in src/assets/blog-images/, import it at the top of
// this file, and interpolate it into the body. The import is what lets the
// build fingerprint the file; a bare relative path in Markdown is only text
// and will 404.
//
//   import photo from "../../assets/blog-images/photo.webp";
//   body: `![Description of the photo](${photo})`
//
// Keep the Markdown flush against the left margin. Indenting a line by four
// spaces makes it a code block, which is rarely what you meant.

import googleplex from "../../assets/blog-images/googleplex.webp";

export const POSTS = [
  {
    id: "recruiting-for-big-tech",
    icon: "⌛",
    title: "Recruiting for big tech",
    date: "09/10/26",
    body: `
![The Googleplex](${googleplex})

I often get asked for advice on breaking into the fantastical land of big tech SWE. I always end up giving the same spiel, so I figured I’d take the time to write it down.

### Work small, see big

If starting from scratch, you should first get work experience at a smaller, local company.

Of course, it'll be good for your resume, so it’ll be easier to recruit for big tech afterwards.

But also, big tech companies operate in their own bubbles. Each company does their work in a certain way, and processes are much more rigid - you must adhere to them. If you were to join, say, Amazon, as your first work experience, you wouldn't get the opportunity to gain an understanding of what the typical workflow is across the industry, and why Amazon might be opinionated in doing things a certain way.

But if you came from outside with a fresh perspective, you'd have a better idea of whats going on - you might even be able to identify ways Amazon could change things for the better!
So don’t look at working smaller roles as a *‘rung on the ladder’*, but rather as an opportunity to learn and enrich your world-view - often with equally talented engineers!

### Bare minimum DSA

You’ll want to go through the [Blind 75](https://leetcode.com/problem-list/oizxjoit/) Leetcode problems. Build an intuition for their solutions rather than memorizing the solutions. See the process that [Neetcode](https://www.youtube.com/@NeetCode/videos) goes through in his videos - notice his lengthy planning phase, and clear verbal communication of his ideas.

I must emphasize - do **NOT** memorize solutions. It’ll only take up mental space. Focus on the thought process. For practice, I’ll often even just read a problem and plan its solution, but not actually implement it. To this day, I only have [53 solutions](https://leetcode.com/u/justinxing/) actually submitted…

If you can hit this technical bar, you’ll be well off for most (intern level) interviews.

### Be a person

No one wants to work with a boring SWE. So go out and have fun with your friends! Interviewers are just as much looking for a person they’ll find pleasant to work with.

---

As long as companies continue to just ask DSA, these core skills will be really all you need!

But please note - this guide was just for getting your foot in the door - the actual job that comes afterwards will demand more.

`,
  },
];

export const getPostById = (id) => POSTS.find((post) => post.id === id);
