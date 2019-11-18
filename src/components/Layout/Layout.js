import React, { Component } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import classes from "./styles.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClose = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <>
        <Toolbar />
        <SideDrawer
          close={this.sideDrawerClose}
          isOpen={this.state.showSideDrawer}
        />
        <main className={classes.content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
