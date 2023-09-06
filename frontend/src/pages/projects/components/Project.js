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
                <div className={classes.title}>{props.title}</div>
                <div className={classes.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;
