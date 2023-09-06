import classes from "./About.module.css";

import pfp from "../../assets/pfp.PNG";

import htmlImage from '../../assets/stack-icons/html.svg';
import cssImage from '../../assets/stack-icons/css.svg';
import javascriptImage from '../../assets/stack-icons/javascript.svg';
import reactImage from '../../assets/stack-icons/react.svg';
import pythonImage from '../../assets/stack-icons/python.svg';
import djangoImage from '../../assets/stack-icons/django.svg';
import sqlImage from '../../assets/stack-icons/sql.svg';

import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    return (
        <div className={classes.aboutWrapper}>
            <div className={classes.card}>
                <div className={classes.imageWrapper}>
                    <img
                        src={pfp}
                        alt="Justin Xing"
                        className={classes.profileShot}
                    />
                </div>
                <div className={classes.personal}>
                    <div className={classes.name}>JUSTIN XING</div>
                    <div className={classes.title}>Software Engineer</div>
                </div>
                <div className={classes.description}>
                    Hey! I'm a computer science co-op student at the University
                    of Waterloo set to graduate in 2027. As a self-taught
                    software developer, I pride myself on my capacity to quickly
                    learn about anything I set my eyes on, software related or
                    not. My current expertise lies within web development, but
                    I'm looking to explore other areas! Outside of dev, I love
                    to rock climb and go on adventures with my cat.
                </div>
            </div>
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                <IconButton href='https://github.com/justin-xing' target='_blank' size='large'>
                    <GitHubIcon fontSize='inherit'/>
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/justinxing/' target='_blank' size='large'>
                    <LinkedInIcon fontSize='inherit'/>
                </IconButton>
            </div>
            <div className={classes.techCard}>
                <img src={htmlImage} alt='HTML'/>
                <img src={cssImage} alt='CSS'/>
                <img src={javascriptImage} alt='Javascript'/>
                <img src={reactImage} alt='React'/>
                <img src={pythonImage} alt='Python'/>
                <img src={djangoImage} alt='Django'/>
                <img src={sqlImage} alt='SQL'/>
            </div>
        </div>
    );
};

export default About;
