import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";

import classes from "./BlogPost.module.css";
import { getPostById } from "./posts";

const SITE_TITLE = "Justin's Space";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostById(slug);

  // React Router keeps the scroll position, so arriving from a card partway
  // down the list would otherwise drop you into the middle of the post.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    document.title = post ? `${post.title} — ${SITE_TITLE}` : SITE_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, [post]);

  if (!post) {
    return (
      <main className={classes.page}>
        <article className={classes.post}>
          <Link to="/blog" className={classes.back}>
            ← BLOG
          </Link>
          <div className={classes.title}>Post Not Found</div>
          <div className={classes.missing}>
            There's nothing written at this address.
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className={classes.page}>
      <article className={classes.post}>
        <Link to="/blog" className={classes.back}>
          ← BLOG
        </Link>
        <div className={classes.header}>
          <span className={classes.icon}>{post.icon}</span>
          <div>
            <h1 className={classes.title}>{post.title}</h1>
            <div className={classes.date}>{post.date}</div>
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes.content}>
          <Markdown>{post.body}</Markdown>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
