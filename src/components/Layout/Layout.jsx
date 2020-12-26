import React from "react";
import ToolBar from "./../Navigation/ToolBar/ToolBar";
import classes from "./Layout.module.css";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <>
      <ToolBar />
      <SideDrawer />
      {/* <div> Toolbar, SideRawer, BackDrop</div> */}
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
