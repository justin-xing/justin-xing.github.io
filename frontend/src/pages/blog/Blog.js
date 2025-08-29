import { Tweet } from 'react-tweet';

import classes from './Blog.module.css';

const Blog = () => {
    return (
      <div className={classes.blogWrapper}>
        <Tweet id='1273161294854701058'/>
      </div>
    );
}
export default Blog;