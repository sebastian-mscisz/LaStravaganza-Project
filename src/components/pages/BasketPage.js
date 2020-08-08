import React from "react";
import RemoveFromCartButton from "../layouts/RemoveFromCartButton";

const BasketPage = (props) => {
  const orderList = props.orderList.map((item) => (
    <p>
      {item.name} - {item.price} - {item.ingredients} -{" "}
      <RemoveFromCartButton
        handleRemoveItem={props.handleRemoveItem}
        itemId={item.id}
      />
    </p>
  ));

  return (
    <div className="container">
      {orderList.length != 0 ? orderList : "Koszyk"}
    </div>
  );
};

export default BasketPage;
