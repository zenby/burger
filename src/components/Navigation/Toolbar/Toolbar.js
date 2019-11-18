import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./styles.module.css";

const toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <div>Menu</div>
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
