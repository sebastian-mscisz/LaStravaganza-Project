import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="navbar-nav">
        <a href="#">
          <span class="fas fa-shopping-cart text-dark"></span>
        </a>
      </div>
    );
  }
}

export default Item;
