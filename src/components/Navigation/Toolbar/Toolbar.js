import React from "react";

import Logo from "../../Logo/Logo";

import classes from "./styles.module.css";

const toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <div>Menu</div>
      <Logo />
      <nav></nav>
    </header>
  );
};

export default toolbar;
