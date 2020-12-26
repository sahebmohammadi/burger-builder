import React from "react";
import classes from './DrawerToggler.module.css'
const DrawerToggler = ({ drawerToggler }) => {
  return (
    <div onClick={drawerToggler} className={classes.drawerToggler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggler;
