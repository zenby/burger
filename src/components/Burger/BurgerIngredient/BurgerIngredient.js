import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import classes from "./styles.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = (
          <div
            className={classnames(classes.breadBottom, classes.ingredient)}
          ></div>
        );
        break;
      case "bread-top":
        ingredient = (
          <div className={classnames(classes.breadTop, classes.ingredient)}>
            <div
              className={classnames(classes.seeds1, classes.ingredient)}
            ></div>
            <div
              className={classnames(classes.seeds2, classes.ingredient)}
            ></div>
          </div>
        );
        break;
      case "meat":
        ingredient = (
          <div className={classnames(classes.meat, classes.ingredient)}></div>
        );
        break;
      case "cheese":
        ingredient = (
          <div className={classnames(classes.cheese, classes.ingredient)}></div>
        );
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propsTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
