import classes from "./About.module.css";

import AboutCard from "./components/AboutCard";
import NewsCard from "./components/NewsCard";
import LinkIconBar from "./components/LinkIconBar";

const About = () => {
  return (
    <main className={classes.page}>
      <div className={classes.mainContent}>
        <AboutCard />
        <NewsCard />
      </div>
      <LinkIconBar />
    </main>
  );
};

export default About;
