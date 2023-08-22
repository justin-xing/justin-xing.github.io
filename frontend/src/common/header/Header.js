import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import ResumeButton from "./components/resume/ResumeButton";

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <Navigation className={classes.headerLeft}/>
      <Logo/>
      <ResumeButton className={classes.headerRight}/>
    </div>
  );
}

export default Header;