import React from "react";

const RemoveFromCartButton = (props) => {
  const itemId = props.itemId;
  return <button onClick={() => props.handleRemoveItem(itemId)}>X usuń</button>;
};

export default RemoveFromCartButton;
