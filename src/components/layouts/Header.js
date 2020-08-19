import React from "react";
import Logo from "./Logo";
import Menu from "./Navigation";

const Header = () => {
  return (
    <nav className="navbar d-flex navbar-expand-lg sticky-top navbar-light bg-tertiary pt-3 pb-3">
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
