import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./styles.module.css";

const toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
