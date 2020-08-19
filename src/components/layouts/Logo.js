import React from "react";
import image from "../../assets/images/logo.svg";

const Logo = () => {
  console.log(image);
  return (
    <p className="navbar-brand">
      <img src={image} />
    </p>
  );
};

export default Logo;
