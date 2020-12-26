import React from "react";
import Logo from "../../Logo/Logo";
import BackDrop from "../../UI/BackDrop/BackDrop";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = ({ show, onClick }) => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (show) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }
  return (
    <>
      <BackDrop show={show} onClick={onClick} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
