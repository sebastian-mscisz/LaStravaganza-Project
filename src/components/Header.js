import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import ShopCart from "./ShopCart";

const Header = () => {
  return (
    <div className="bg-primary">
      <nav className="navbar navbar-expand-lg sticky-top navbar-light">
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMenu"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toogle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarMenu"
          >
            <Menu />
            <ShopCart />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
