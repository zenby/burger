import React, { Component } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./styles.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  toggleSideBar = () => {
    this.setState(({ showSideDrawer }) => ({
      showSideDrawer: !showSideDrawer
    }));
  };

  render() {
    return (
      <>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideDrawer
          close={this.toggleSideBar}
          isOpen={this.state.showSideDrawer}
        />
        <main className={classes.content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
