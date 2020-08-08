import React from "react";

const AddToCartButton = (props) => {
  const item = {
    id: props.id,
    name: props.name,
    price: props.price,
    ingredients: props.ingredients,
  };
  return (
    <button onClick={() => props.handleAddItem(item)}>Dodaj do koszyka</button>
  );
};

export default AddToCartButton;
