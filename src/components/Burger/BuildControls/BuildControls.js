import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./styles.module.css";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = props => (
  <div className={classes.buildControls}>
    {controls.map(control => (
      <BuildControl label={control.label} key={control.label} />
    ))}
  </div>
);

export default buildControls;
