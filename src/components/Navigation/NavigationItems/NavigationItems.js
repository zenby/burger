import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./styles.module.css";

const navigationItems = props => {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem link="/" active>
        Burger builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
