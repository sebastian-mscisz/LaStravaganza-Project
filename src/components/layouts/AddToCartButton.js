import React from "react";

const AddToCartButton = (props) => {
  const item = {
    id: props.id,
    name: props.name,
    price: props.price,
    ingredients: props.ingredients,
  };
  return (
    <button
      className="buyBtn btn btn-outline-secondary"
      data-hover='<span className="fas fa-shopping-cart"></span>'
      onClick={() => props.handleAddItem(item)}
    >
      <span class="btnIcon fas fa-shopping-cart"></span>
      <span>
        <strong>Dodaj do koszyka</strong>
      </span>
    </button>
  );
};

export default AddToCartButton;
