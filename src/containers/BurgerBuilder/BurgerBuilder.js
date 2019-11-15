import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const PRICE = {
  cheese: 2.1,
  meat: 3.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 1,
      meat: 2
    },
    totalPrice: 2
  };

  addIngredient = type => {
    this.setState(({ ingredients }) => {
      ingredients[type]++;
      return { ingredients, totalPrice: this.getTotalPrice(ingredients) };
    });
  };

  removeIngredient = type => {
    this.setState(({ ingredients }) => {
      if (ingredients[type] > 0) {
        ingredients[type]--;
      }
      return { ingredients, totalPrice: this.getTotalPrice(ingredients) };
    });
  };

  getTotalPrice = ingredients => {
    return Object.entries(ingredients).reduce(
      (summ, [ingredient, amount]) => summ + PRICE[ingredient] * amount,
      0
    );
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          totalPrice={this.state.totalPrice}
        />
      </>
    );
  }
}

export default BurgerBuilder;
