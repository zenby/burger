import React from "react";

import Backdrop from "../Backdrop/Backdrop";

import classes from "./styles.module.css";

const modal = props => {
  return (
    <>
      <Backdrop show={props.show} onCancel={props.onCancel} />
      <div
        className={classes.modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
