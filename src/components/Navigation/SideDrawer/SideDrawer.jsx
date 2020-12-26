import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
const SideDrawer = () => {
  return (
    <div className={classes.sideDrawer}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
