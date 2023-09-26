import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import classes from "./Project.module.css";

const Project = (props) => {
    return (
        <div className={classes.container}>
            <img
                src={props.img}
                alt="project"
                className={classes.image}
                style={{
                    width: props.type === "width" ? "125%" : null,
                    height: props.type === "height" ? "100%" : null,
                }}
            />
            <div className={classes.overlay}>
                <div>
                    <div className={classes.title}>{props.title}</div>
                    <div className={classes.description}>{props.description}</div>
                </div>
                <div>
                    <IconButton href={props.link} target='_blank' size='large' sx={{ color: 'white' }}>
                        <GitHubIcon fontSize='inherit'/>
                    </IconButton>
                    <IconButton href={props.demoLink} target='_blank' size='large' sx={{ color: 'white' }}>
                        <PlayCircleIcon fontSize='inherit'/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Project;
