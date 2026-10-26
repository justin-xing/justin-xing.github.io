import { CircularProgress } from "@mui/material";

import classes from "./Blog.module.css";

import BlogCard from "./components/BlogCard";
import { usePosts } from "./posts";

// kind: "blog" or "readings", which share this page.
const Blog = ({ kind }) => {
  const { posts, loading } = usePosts(kind);

  // A spinner until Notion answers, rather than flashing "Nothing written here
  // yet" before the posts arrive.
  if (loading) {
    return (
      <main className={classes.page}>
        <CircularProgress
          size={24}
          aria-label="Loading posts"
          sx={{ color: "var(--text-muted)", mt: 5 }}
        />
      </main>
    );
  }

  return (
    <main className={classes.page}>
      {posts.length > 0 ? (
        posts.map((post) => <BlogCard key={post.id} kind={kind} {...post} />)
      ) : (
        <div className={classes.empty}>Nothing written here yet.</div>
      )}
    </main>
  );
};

export default Blog;
