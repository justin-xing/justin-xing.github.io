import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import classes from "./LinkIconBar.module.css";

const LinkIconBar = () => {
  return (
    <div className={classes.iconBar}>
      <IconButton
        href="https://github.com/justin-xing"
        target="_blank"
        size="large"
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/justinxing/"
        target="_blank"
        size="large"
      >
        <LinkedInIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default LinkIconBar;
