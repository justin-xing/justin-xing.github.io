import classes from "./Blog.module.css";

import BlogCard from "./components/BlogCard";
import { POSTS } from "./posts";

const Blog = () => {
  return (
    <main className={classes.page}>
      {POSTS.length > 0 ? (
        POSTS.map((post) => <BlogCard key={post.id} {...post} />)
      ) : (
        <div className={classes.empty}>Nothing written here yet.</div>
      )}
    </main>
  );
};

export default Blog;
