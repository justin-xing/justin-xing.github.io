import classes from './Projects.module.css';
import ProjectGrid from './components/ProjectGrid';

const Projects = () => {
    return (
      <div className={classes.projectsWrapper}>
        <ProjectGrid/>
      </div>
    );
}

export default Projects;