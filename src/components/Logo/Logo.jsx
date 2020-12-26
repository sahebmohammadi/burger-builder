import React from "react";
import LogoImage from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={LogoImage} alt="logo"></img>
    </div>
  );
};

export default Logo;
