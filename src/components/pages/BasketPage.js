import React from "react";

const BasketPage = (props) => {
  const orderList = props.orderList.map((item) => (
    <p>
      {item.name} - {item.price} - {item.ingredients}
    </p>
  ));
  console.log(orderList);

  return (
    <div className="container">
      {orderList.length != 0 ? orderList : "Koszyk"}
    </div>
  );
};

export default BasketPage;
