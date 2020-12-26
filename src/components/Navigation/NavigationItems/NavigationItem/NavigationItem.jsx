import React from "react";
import classes from "./NavigationItem.module.css";
const NavigationItem = ({ link, isActive, children }) => {
  return (
    <li className={classes.navigationItem}>
      <a className={isActive ? classes.active : null} href={link}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
