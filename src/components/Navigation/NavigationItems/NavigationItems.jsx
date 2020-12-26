import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
const NavigationItems = () => {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem link="/" isActive>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">checkout</NavigationItem>
      <NavigationItem link="/">checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
