import React from "react";

import Button from "../../../components/Button/Button";

const orderSummary = props => {
  const summary = Object.keys(props.ingredients).map(key => (
    <li key={key}>
      {key}: {props.ingredients[key]}
    </li>
  ));

  return (
    <>
      <h3>Your order</h3>
      <p>Following ingredients</p>
      <ul>{summary}</ul>
      <Button type="danger">Cancel</Button>
      <Button type="success" onClick={props.continue}>
        Continue
      </Button>
    </>
  );
};

export default orderSummary;
