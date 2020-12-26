import React from "react";
import classes from "./BackDrop.module.css";

const BackDrop = ({ show, onClick }) => {
  return show ? (
    <div className={classes.BackDrop} onClick={onClick}></div>
  ) : null;
};

export default BackDrop;
