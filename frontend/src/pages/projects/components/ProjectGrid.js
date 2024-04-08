import classes from './ProjectGrid.module.css';

import Project from './Project';

import terminalLive from '../../../assets/project-images/terminal.png';
import bash from '../../../assets/project-images/bash.png';
import bot from '../../../assets/project-images/bot.png';
import subway from '../../../assets/project-images/subway.png';

const ProjectGrid = () => {
    return (
        <div className={classes.projectGridWrapper}>
            <section className={classes.projectOne}>
                <Project type='width' img={terminalLive} title='Strategy Game Playing Algorithm' description='On TERMINAL, players code algorithms that compete head-to-head, tower defense-style. This algorithm is ranked 60th in the world!' link='https://github.com/justin-xing' demoLink='https://terminal.c1games.com/'/>
            </section>
            <section className={classes.projectTwo}>
                <Project type='width' img={bot} title='Ducky Tracker' description='A Discord bot to track friend activity on Roblox!' link='https://github.com/justin-xing/ducky-tracker'/>
            </section>
            <section className={classes.projectThree}>
                <Project type='width' img={bash} title='Bash Themed Website' description='An interactive bash themed website' link='https://github.com/justin-xing/Bash-Themed-Website' demoLink='https://justin-xing.github.io/Bash-Themed-Website/'/>
            </section>
            <section className={classes.projectFour}>
                <Project type='height' img={subway} title='Short-form Video Generator' description='Creates pairs of short-form news videos skewed towards varying political biases.' link='https://github.com/anthonypoon12/ShortsNews'/>
            </section>
        </div>
    )
}

export default ProjectGrid;