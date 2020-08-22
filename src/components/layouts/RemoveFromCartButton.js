import React from "react";

const RemoveFromCartButton = (props) => {
  const itemId = props.itemId;
  return (
    <button
      className="btn btn-outline-secondary"
      onClick={() => props.handleRemoveItem(itemId)}
    >
      <span className="fas fa-minus"></span>
      <span>
        <strong> Usuń</strong>
      </span>
    </button>
  );
};

export default RemoveFromCartButton;
