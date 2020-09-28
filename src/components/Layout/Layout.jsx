import React from "react";

//  Styles
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <>
      <div> Toolbar, SideRawer, BackDrop</div>
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
