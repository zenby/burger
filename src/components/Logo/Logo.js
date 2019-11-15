import React from "react";

import path from "../../assets/burger.png";
import classes from "./styles.module.css";

const logo = props => {
  return (
    <div className={classes.logo}>
      <img src={path} alt="burger" />
    </div>
  );
};

export default logo;
