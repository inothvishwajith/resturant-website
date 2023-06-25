import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  Toolbar,
  Divider,
  Typography,
} from "@mui/material";

import FastfoodIcon from '@mui/icons-material/Fastfood';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
 <Typography color={'Gold'} variant='h6' component="div" sx={{ flexGrow: 1, my: 2  }}>
            <FastfoodIcon />
            SL Restaurant
          </Typography>
           <Divider />
            <ul className="mobile-navigation">
              <li>
                <Link activeClassName="active" to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </Box>
  
)

  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "Red" }}>
        <Toolbar>
         
<IconButton
  color="inherit"
  aria-label="open drawer"
  edge="start"
  sx={{
    marginRight: 2,
    display: { sm: "none" },
  }}
  onClick={handleDrawerToggle}
>
<WidgetsIcon />
</IconButton>
          <Typography color={'gold'} variant='h6' component="div" sx={{ flexGrow: 1 }}>
            <FastfoodIcon />
            SL Restaurant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link activeClassName="active" to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>

      </AppBar>
      <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
          <Toolbar />
        </Box>
    </Box>
  );
}

export default Header;
