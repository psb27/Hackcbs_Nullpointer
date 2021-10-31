
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CryptoState
          </Typography>
       
        <Link color="inherit" className="links" to="/">
        <Button color="inherit" >Home</Button>
      
        </Link>
        <Link color="inherit"  className="links"to="/properties">
        
       <Button color="inherit">Properties</Button>
        </Link>
        <Link className="links" to="/Register" >
        <Button  color="inherit">  Register</Button>
     
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import "./Navbar.css";

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   return (





    
//     // <nav className="navbar m-5 flex justify-between item-center h-16 text-block relative shadow-sm">
      // <Link to="/" className="pl-8">
      //   CryptoState
      // </Link>
      // <div className="pr-8 md:block hidden">
      //   <Link to="/" className="pl-8">
      //     Home
      //   </Link>
      //   <Link to="/properties" className="pl-8">
      //     Properties
      //   </Link>
      //   <Link to="/about" className="pl-8">
      //     About Us
      //   </Link>
      //   <Link to="/Register" className="pl-8">
      //  Register
      //   </Link>
      // </div>
//     // </nav>
//   );
// }

// export default Navbar;
