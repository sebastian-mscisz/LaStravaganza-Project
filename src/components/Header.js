import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import ShopCart from "./ShopCart";

class Header extends Component {
  render() {
    return (
      <div className="container bg-primary">
        <nav className="navbar navbar-expand-lg sticky-top navbar-light">
          <div className="container">
            <Logo />
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMenu"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toogle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarMenu"
            >
              <Menu />
              <ShopCart />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
