import React, { Component } from "react";
import Item from "./Item";
import data from "../assets/data/menu.json";

class ItemList extends Component {
  state = {
    itemList: [],
  };
  componentDidMount() {
    this.setState({
      itemList: JSON.stringify(data),
    });
  }
  render() {
    return (
      <>
        <div className="navbar-nav">{this.state.itemList}</div>
      </>
    );
  }
}

export default ItemList;
