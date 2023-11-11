import Logo from "./components/logo/Logo";
import Navigation from "./components/navigation/Navigation";
import ResumeButton from "./components/resume/ResumeButton";
import { Box } from "@mui/material";

import classes from './Header.module.css';
import HeaderButtons from "./components/desktopButtons/HeaderButtons";

const Header = () => {
  return (
    <div className={classes.header}>
        <Box sx={{ display: { xs: 'block', md: 'none' }}}>
            <Navigation className={classes.headerLeft}/>
        </Box>
        <Logo/>
        <Box sx={{ display: { xs: 'none', md: 'block' }}}>
            <HeaderButtons/>
        </Box>
            <ResumeButton className={classes.headerRight}/>
    </div>
  );
}

export default Header;