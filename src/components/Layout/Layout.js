import React from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./styles.module.css";

const layout = props => {
  return (
    <>
      <Toolbar />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default layout;
