import React, { Component } from "react";

class ShopCart extends Component {
  render() {
    return (
      <div className="navbar-nav">
        <a href="#" className="text-secondary">
          Koszyk <span className="fas fa-shopping-cart text-secondary"></span>
        </a>
      </div>
    );
  }
}

export default ShopCart;
