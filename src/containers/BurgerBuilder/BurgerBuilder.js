import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    totalPrice: 2,
    purchasing: false
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

  continuePurchase = () => {
    alert("continue");
  };

  togglePurchasing = () =>
    this.setState(({ purchasing }) => ({ purchasing: !purchasing }));

  render() {
    const { ingredients, totalPrice, purchasing } = this.state;

    return (
      <>
        <Modal show={purchasing} onCancel={this.togglePurchasing}>
          <OrderSummary
            ingredients={ingredients}
            continue={this.continuePurchase}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          totalPrice={totalPrice}
          togglePurchasing={this.togglePurchasing}
        />
      </>
    );
  }
}

export default BurgerBuilder;
