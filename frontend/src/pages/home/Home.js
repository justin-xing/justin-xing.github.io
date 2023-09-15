import classes from "./Home.module.css";
import AnimatedBackground from "./components/AnimatedBackground";

const Home = () => {
    return (
        <div className={classes.homeWrapper}>
            <AnimatedBackground/>
            <div className={`${classes.name} ${classes.animateCharacter}`}>
                <div className={classes.letter}>J</div>
                <div className={classes.letter}>U</div>
                <div className={classes.letter}>S</div>
                <div className={classes.letter}>T</div>
                <div className={classes.letter}>I</div>
                <div className={classes.letter}>N</div>
                <div className={classes.space} />
                <div className={classes.letter}>X</div>
                <div className={classes.letter}>I</div>
                <div className={classes.letter}>N</div>
                <div className={classes.letter}>G</div>
            </div>
        </div>
    );
};

export default Home;
