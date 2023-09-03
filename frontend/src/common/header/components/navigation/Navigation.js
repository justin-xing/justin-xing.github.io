import { useState, useEffect } from "react";

import { Button, Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useLocation } from "react-router-dom";

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  let locationPath = useLocation().pathname;

  const [path, setPath] = useState('')

  useEffect(() => {
    if (locationPath === '/') {
      setPath('')
    } else if (locationPath === '/about') {
      setPath('ABOUT')
    } else if (locationPath === '/projects') {
      setPath('PROJECTS');
    } else if (locationPath === '/blog') {
      setPath('BLOG')
    }
  }, [locationPath])

  const itemArray = [['About', '/about'], ['Projects', '/projects'], ['Blog', '/blog']];

  const ListItems = () => {
    return (
      <Box sx={{width: 250, paddingTop: '70px'}} role='presentation' onClick={closeDrawer} onKeyDown={closeDrawer}>
        <ul className={classes.list}>
          {itemArray.map((item) => (
            <li key={item[0]}>
              <Button>
                <NavLink to={item[1]} className={classes.listItemText}>
                  {item[0]}
                </NavLink>
              </Button>
            </li>
          ))}
        </ul>
      </Box>
    )
  }

  return (
    <div>
      <div className={props.className}>
        {!drawerOpen ? <IconButton onClick={openDrawer}><MenuIcon /></IconButton> 
        : <IconButton onClick={closeDrawer}><CloseIcon /></IconButton>
        }
        <div className={classes.labelText}>{path}</div>
      </div>
      <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
        <ListItems/>
      </Drawer>
    </div>
  );
};

export default Navigation;
