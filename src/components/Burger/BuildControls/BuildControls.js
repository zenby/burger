import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./styles.module.css";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = ({ addIngredient, removeIngredient, totalPrice }) => (
  <div className={classes.buildControls}>
    <p>Current price: {totalPrice.toFixed(2)}</p>
    {controls.map(control => (
      <BuildControl
        label={control.label}
        key={control.label}
        addIngredient={() => addIngredient(control.type)}
        removeIngredient={() => removeIngredient(control.type)}
      />
    ))}
  </div>
);

export default buildControls;
