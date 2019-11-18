import React from "react";

import path from "../../assets/burger.png";
import classes from "./styles.module.css";

const logo = props => {
  return (
    <div className={classes.logo} style={{ height: props.height }}>
      <img src={path} alt="burger" />
    </div>
  );
};

export default logo;
