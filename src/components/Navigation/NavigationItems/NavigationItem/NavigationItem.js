import React from "react";

import classes from "./styles.module.css";

const navigationItem = props => {
  return (
    <li className={classes.navigationItem}>
      <a className={props.active ? classes.active : null} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
