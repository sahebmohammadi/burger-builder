import React from "react";
import ToolBar from "./../Navigation/ToolBar/ToolBar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <ToolBar />
      {/* <div> Toolbar, SideRawer, BackDrop</div> */}
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
