import pfp from "../../../assets/pfp.JPG";
import useImagePreloader from "../../../common/hooks/useImagePreloader";

import classes from "./AboutCard.module.css";

const preloadSrcList = [pfp];

const AboutCard = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  return (
    <div className={classes.aboutCard}>
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
            <span className={classes.goldOutline}>University of Waterloo</span>
          </b>
          .
        </p>
        <p>
          My current technical interests include distributed systems and machine
          learning.
        </p>
        <p>
          I am not interested in work which prioritizes select individuals over
          the general populus.
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
  );
};

export default AboutCard;
