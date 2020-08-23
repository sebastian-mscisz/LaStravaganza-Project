import React from "react";
import Loader from "react-loader-spinner";

const OrderLoadingScreen = (props) => {
  let windowContent = null;
  if (props.type === "spin") {
    windowContent = (
      <>
        <p className="pb-4">Proszę czekać...</p>
        <Loader type="TailSpin" color="#b06f2c" height={100} width={100} />
        <p className="pt-4">Realizujemy zamówienie...</p>
      </>
    );
  } else if (props.type === "confirm") {
    windowContent = (
      <>
        <p className="pb-4">Potwierdzono zamówienie!</p>
        <p>
          <span className="fas fa-check"></span>
        </p>
      </>
    );
  }
  return (
    <div className="loadingWindow d-flex flex-column align-items-center justify-content-center">
      {windowContent}
    </div>
  );
};

export default OrderLoadingScreen;
