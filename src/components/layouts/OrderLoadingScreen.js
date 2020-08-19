import React from "react";
import Loader from "react-loader-spinner";

const OrderLoadingScreen = (props) => {
  let windowContent = null;
  if (props.type === "spin") {
    windowContent = (
      <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
    );
  } else if (props.type === "confirm") {
    windowContent = "Potwierdzono zamówienie";
  }
  return <div className="loadingWindow bg-secondary">{windowContent}</div>;
};

export default OrderLoadingScreen;
