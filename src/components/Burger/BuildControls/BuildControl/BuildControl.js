import React from "react";

import classes from "./styles.module.css";

const buildConrol = ({ addIngredient, removeIngredient, label }) => (
  <div className={classes.buildControl}>
    <div className={classes.label}>{label}</div>
    <button className={classes.less} onClick={removeIngredient}>
      Less
    </button>
    <button className={classes.more} onClick={addIngredient}>
      More
    </button>
  </div>
);

export default buildConrol;
