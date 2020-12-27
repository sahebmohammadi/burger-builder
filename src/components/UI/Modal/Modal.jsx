import React from "react";
import BackDrop from "../BackDrop/BackDrop";
import classes from "./Modal.module.css";

const Modal = ({ children, show, onClick }) => {

  return (
    <>
      <BackDrop show={show} onClick={onClick} />
      <div
        className={classes.modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
