import React from 'react'

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, Home } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles() 
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography  variant="h6" className={classes.title} color="inherit">
              <Home/>
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton  aria-label="Show cart items" color="inherit">
              <Badge badgeContent={"1"} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Navbar
