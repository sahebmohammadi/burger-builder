import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from "../SideDrawer/DrawerToggler/DrawerToggler";
import classes from "./ToolBar.module.css";
const ToolBar = ({ drawerToggler }) => {
  return (
    <header className={classes.ToolBar}>
      <DrawerToggler drawerToggler={drawerToggler} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default ToolBar;
