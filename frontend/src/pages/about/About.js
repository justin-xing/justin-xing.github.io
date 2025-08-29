import classes from "./About.module.css";

import useImagePreloader from "../../common/hooks/useImagePreloader";

import pfp from "../../assets/pfp.JPG";

import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const preloadSrcList = [pfp];

const About = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  return (
    <div className={classes.aboutWrapper}>
      <div className={classes.card}>
        <div className={classes.imageWrapper}>
          <img
            src={imagesPreloaded ? pfp : undefined}
            alt="Justin Xing"
            className={classes.profileShot}
          />
        </div>
        <div className={classes.personal}>
          <h2 className={classes.name}>JUSTIN XING</h2>
          <h3 className={classes.title}>Software Engineer</h3>
        </div>
        <div className={classes.description}>
          <p>
            I'm a computer science student at the{" "}
            <b>
              <span className={classes.goldOutline}>
                University of Waterloo
              </span>
            </b>{" "}
            set to graduate in April 2027.
          </p>
          <ul>
            <li>
              Currently on a study term for Fall 2025
            </li>
            <li>
              Previously at:
              <ul>
                <li>
                  <b className={classes.limeOutline}>Google</b>
                </li>
                <li>
                  <b className={classes.blueOutline}>Government of Canada</b>
                </li>
                <li>
                  <b className={classes.purpleOutline}>Qualifacts</b>
                </li>
                <li>
                  <b className={classes.redOutline}>Canada Post</b>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
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
    </div>
  );
};

export default About;
