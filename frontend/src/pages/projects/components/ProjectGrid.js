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
                <Project type='width' img={terminalLive} title='Strategy Game Playing Algorithm' description='Ranked 2200, 60th in the world!' />
            </section>
            <section className={classes.projectTwo}>
                <Project type='width' img={bash} title='Bash Themed Website' description='An interactive bash themed website'/>
            </section>
            <section className={classes.projectThree}>
                <Project type='width' img={fidget} title='Notes to Flashcard Converter' description='Upload your pdf notes to turn them into flashcards!'/>
            </section>
            <section className={classes.projectFour}>
                <Project type='height' img={todo} title='Todo App' description='Todo app with a real time database.'/>
            </section>
        </div>
    )
}

export default ProjectGrid;