import React from "react";
import classnames from "classnames";

import classes from "./styles.module.css";

const button = props => {
  return (
    <button
      onClick={props.onClick}
      className={classnames(classes.button, classes[props.type])}
    >
      {props.children}
    </button>
  );
};

export default button;
