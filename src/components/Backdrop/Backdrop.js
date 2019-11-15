import React from "react";

import classes from "./styles.module.css";

const backdrop = props =>
  props.show ? (
    <div className={classes.backdrop} onClick={props.onCancel}></div>
  ) : null;

export default backdrop;
