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
            I am a 4th year computer science undergraduate at the{" "}
            <b>
              <span className={classes.goldOutline}>
                University of Waterloo
              </span>
            </b>
            .
          </p>
          <p>
            My current technical interests include distributed systems and
            machine learning.
          </p>
          <p>
            I am not interested in work which prioritizes select individuals
            over the general populus.
          </p>
          <p>
            I will be interning at{" "}
            <b className={classes.databricksOutline}>Databricks</b> for Winter
            2026. I previously interned at a variety of wonderful organizations:
          </p>
          <p>
            <b className={classes.limeOutline}>Google</b>,{" "}
            <b className={classes.blueOutline}>Government of Canada</b>,{" "}
            <b className={classes.purpleOutline}>Qualifacts</b>,{" "}
            <b className={classes.redOutline}>Canada Post</b>
          </p>
        </div>
      </div>
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
    </div>
  );
};

export default About;
