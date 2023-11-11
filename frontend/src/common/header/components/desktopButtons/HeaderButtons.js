import { Link } from "react-router-dom";

import classes from './HeaderButtons.module.css';

const HeaderButtons = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.link}>
                <Link to='/about' style={{textDecoration: 'none', color: 'black'}}>ABOUT</Link>
            </div>
            <div className={classes.link}>
                <Link to='/projects' style={{textDecoration: 'none', color: 'black'}}>PROJECTS</Link>
            </div>
            <div className={classes.link}>
                <Link to='/blog' style={{textDecoration: 'none', color: 'black'}}>BLOG</Link>
            </div>
        </div>
    )
}

export default HeaderButtons;