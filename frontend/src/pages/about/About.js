import classes from './About.module.css';

import pfp from '../../assets/pfp.PNG';

const About = () => {
    return (
      <div className={classes.aboutWrapper}>
        <div className={classes.card}>
          <div className={classes.imageWrapper}>
            <img src={pfp} alt='Justin Xing' className={classes.profileShot}/>
          </div>
          <div className={classes.personal}>
            <div className={classes.name}>JUSTIN XING</div>
            <div className={classes.title}>Software Engineer</div>
          </div>
          <div className={classes.description}>
            Hey! I'm a computer science co-op student at the University of Waterloo set to graduate in 2027.
            As a self-taught software developer, I pride myself on my capacity to quickly learn about anything I set my eyes on,
            software related or not. My current expertise lies within web development, but I've also got my sights set on data and ML.
            Outside of dev, I love to rock climb and go on adventures with my cat.
          </div>
        </div>
      </div>
    );
    
}

export default About;