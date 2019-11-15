import React from "react";

import classes from "./styles.module.css";

const toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav></nav>
    </header>
  );
};

export default toolbar;
