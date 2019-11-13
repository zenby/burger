import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./styles.module.css";

const burger = props => {
  const ingredients = Object.entries(props.ingredients)
    .map(([type, amount]) =>
      Array(amount)
        .fill(0)
        .map((_, i) => <BurgerIngredient key={type + i} type={type} />)
    )
    .reduce((arr, b) => arr.concat(b), []);

  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" key="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" key="bread-bottom" />
    </div>
  );
};

export default burger;
