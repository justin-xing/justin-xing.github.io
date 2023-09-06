import { useState } from "react";

import ArticleIcon from "@mui/icons-material/Article";
import IconButton from "@mui/material/IconButton";
import Resume from "../../../../assets/Resume.pdf";

import classes from "./ResumeButton.module.css";

const ResumeButton = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <div className={props.className}>
            <IconButton
                href={Resume}
                target="_blank"
                color={hover ? 'primary' : 'default'}
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
            >
                <ArticleIcon />
                <div className={classes.labelText}>RESUME</div>
            </IconButton>
        </div>
    );
};

export default ResumeButton;
