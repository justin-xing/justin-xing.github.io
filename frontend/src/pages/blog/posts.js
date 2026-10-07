// Blog posts come from Notion, served by the Lambda in backend/ at
// REACT_APP_POSTS_URL (frontend/.env). Each post is { id, icon, title, date,
// body, url? } with `body` in Markdown, already sorted newest first.

import { useEffect, useState } from "react";

// One request per page load, shared by every component that asks. Any failure
// resolves to no posts, so the blog shows its empty state instead of breaking.
let request;
const loadPosts = () => {
  const url = process.env.REACT_APP_POSTS_URL;
  if (!request) {
    request = url
      ? // ?. because AbortSignal.timeout is missing in older browsers we
        // still support; those just get no timeout.
        fetch(url, { signal: AbortSignal.timeout?.(8000) })
          .then((res) => (res.ok ? res.json() : []))
          .catch(() => [])
      : Promise.resolve([]);
  }
  return request;
};

export const usePosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let mounted = true;
    loadPosts().then((loaded) => mounted && setPosts(loaded));
    return () => {
      mounted = false;
    };
  }, []);

  return { posts: posts ?? [], loading: !posts };
};
