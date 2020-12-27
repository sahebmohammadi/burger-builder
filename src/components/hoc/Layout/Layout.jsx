import React, { useState } from "react";
import ToolBar from "../../Navigation/ToolBar/ToolBar";
import classes from "./Layout.module.css";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [show, setShow] = useState(false);
  const closeDrawerHandler = () => {
    setShow(false);
  };
  const drawerTogglerHandler = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <ToolBar drawerToggler={drawerTogglerHandler} />
      <SideDrawer show={show} onClick={closeDrawerHandler} />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
