// Blog posts and readings come from Notion, served by the Lambda in backend/ at
// REACT_APP_POSTS_URL (frontend/.env); `kind` is "blog" or "readings". Each post is { id, icon, title, date,
// body, url? } with `body` in Markdown, already sorted newest first.

import { useEffect, useState } from "react";

// One request per kind per page load, shared by every component that asks. Any
// failure resolves to no posts, so the page shows its empty state instead of
// breaking.
const requests = {};
const loadPosts = (kind) => {
  const url = process.env.REACT_APP_POSTS_URL;
  if (!requests[kind]) {
    requests[kind] = url
      ? // ?. because AbortSignal.timeout is missing in older browsers we
        // still support; those just get no timeout.
        fetch(`${url}?db=${kind}`, { signal: AbortSignal.timeout?.(8000) })
          .then((res) => (res.ok ? res.json() : []))
          .catch(() => [])
      : Promise.resolve([]);
  }
  return requests[kind];
};

export const usePosts = (kind) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let mounted = true;
    setPosts(null);
    loadPosts(kind).then((loaded) => mounted && setPosts(loaded));
    return () => {
      mounted = false;
    };
  }, [kind]);

  return { posts: posts ?? [], loading: !posts };
};
