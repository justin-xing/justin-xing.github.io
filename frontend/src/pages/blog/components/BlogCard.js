import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

import classes from "./BlogCard.module.css";

const PREVIEW_HEIGHT = 180;

// The whole card is already a link, so a Markdown link in the preview would
// nest <a> inside <a> — invalid HTML, and a click target competing with the
// card's own. Render preview links as plain text; the real post keeps them.
const PREVIEW_COMPONENTS = { a: ({ children }) => <span>{children}</span> };

const BlogCard = ({ id, icon, title, date, body }) => {
  const [clipped, setClipped] = useState(false);
  const contentRef = useRef(null);

  // The preview is clamped in CSS; this only decides whether the fade should
  // render, so a post shorter than the clamp does not fade out over blank space.
  //
  // A ResizeObserver rather than a resize listener: the text also reflows when
  // Roboto finishes loading from Google Fonts, which the window never sees.
  // (document.fonts.ready is no good here — it resolves against whatever font
  // loads are pending when it is called, which is none of them this early.)
  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return undefined;

    const measure = () => setClipped(content.scrollHeight > PREVIEW_HEIGHT);

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <Link to={`/blog/${id}`} className={classes.card}>
      <div className={classes.header}>
        <span className={classes.icon}>{icon}</span>
        <div>
          <div className={classes.title}>{title}</div>
          <div className={classes.date}>{date}</div>
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.preview}>
        <div ref={contentRef} className={classes.content}>
          <Markdown components={PREVIEW_COMPONENTS}>{body}</Markdown>
        </div>
        {clipped && <div className={classes.fade} />}
      </div>
      <span className={classes.more}>READ MORE →</span>
    </Link>
  );
};

export default BlogCard;
