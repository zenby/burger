import React from "react";

import classes from "./styles.module.css";

const buildConrol = props => (
  <div className={classes.buildControl}>
    <div className={classes.label}>{props.label}</div>
    <button className={classes.less}>Less</button>
    <button className={classes.more}>More</button>
  </div>
);

export default buildConrol;
