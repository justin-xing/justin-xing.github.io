import { Tweet } from 'react-tweet';

import classes from './Blog.module.css';

const Blog = () => {
    return (
      <div className={classes.blogWrapper}>
        <Tweet id='1703065641488413102'/>
      </div>
    );
}
export default Blog;