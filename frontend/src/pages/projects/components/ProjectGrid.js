import classes from './ProjectGrid.module.css';

import Project from './Project';

import terminalLive from '../../../assets/project-images/terminal.png';
import bash from '../../../assets/project-images/bash.png';
import fidget from '../../../assets/project-images/fidgetFixr.png';
import todo from '../../../assets/project-images/todo.png';

const ProjectGrid = () => {
    return (
        <div className={classes.projectGridWrapper}>
            <section className={classes.projectOne}>
                <Project type='width' img={terminalLive} title='Strategy Game Playing Algorithm' description='Ranked 2200, 60th in the world!' link='https://github.com/justin-xing' demoLink='https://terminal.c1games.com/'/>
            </section>
            <section className={classes.projectTwo}>
                <Project type='width' img={bash} title='Bash Themed Website' description='An interactive bash themed website' link='https://github.com/justin-xing/Bash-Themed-Website' demoLink='https://justin-xing.github.io/Bash-Themed-Website/'/>
            </section>
            <section className={classes.projectThree}>
                <Project type='width' img={fidget} title='Notes to Flashcard Converter' description='Upload your pdf notes to turn them into flashcards!' link='https://github.com/justin-xing/FidgetFixr-2.0' demoLink='https://justin-xing.github.io/FidgetFixr-2.0/'/>
            </section>
            <section className={classes.projectFour}>
                <Project type='height' img={todo} title='Todo App' description='Todo app with a real time database.' link='https://github.com/justin-xing/todo'/>
            </section>
        </div>
    )
}

export default ProjectGrid;