import React from "react";
import $ from "jquery";

const AddToCartButton = (props) => {
  const item = {
    id: props.id,
    name: props.name,
    price: props.price,
    ingredients: props.ingredients,
  };
  const handleClick = () => {
    props.handleAddItem(item);
    $("#addToast").toast("show");
  };
  return (
    <button
      className="buyBtn btn btn-outline-secondary"
      data-hover='<span className="fas fa-shopping-cart"></span>'
      onClick={() => handleClick()}
    >
      <span>
        <strong>Dodaj do koszyka</strong>
      </span>
    </button>
  );
};

export default AddToCartButton;
