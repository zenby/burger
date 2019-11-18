import React from "react";
import classnames from "classnames";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./styles.module.css";

const toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <div
        className={classnames(classes.menu, classes.mobileOnly)}
        onClick={props.toggleSideBar}
      >
        Menu
      </div>
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
