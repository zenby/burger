import React from "react";
import classnames from "classnames";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../Backdrop/Backdrop";

import classes from "./styles.module.css";

const sideDrawer = props => {
  return (
    <>
      <BackDrop show={props.isOpen} onCancel={props.close} />
      <div
        className={classnames(
          classes.sideDrawer,
          props.isOpen ? classes.open : classes.close
        )}
      >
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
