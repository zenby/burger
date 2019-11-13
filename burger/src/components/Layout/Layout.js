import React from "react";

import classes from "./styles.module.css";

const layout = props => {
  return (
    <>
      <div>Toolbar</div>
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default layout;
