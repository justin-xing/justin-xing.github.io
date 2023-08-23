import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.homeWrapper}>
      <div className={`${classes.name} ${classes.animateCharacter}`}>
        JUSTIN XING
      </div>
    </div>
  )
};

export default Home;
