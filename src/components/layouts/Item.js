import React from "react";
import AddToCartButton from "./AddToCartButton";

const Item = (props) => {
  return (
    <li key={props.id}>
      {props.name} - {props.price}{" "}
      <AddToCartButton
        name={props.name}
        price={props.price}
        ingredients={props.ingredients}
        handleAddItem={props.handleAddItem}
      />
      <br />
      {props.ingredients}
      <hr />
    </li>
  );
};

export default Item;
