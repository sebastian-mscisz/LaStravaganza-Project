import React, { Component } from "react";
import ItemList from "./ItemList";
import data from "../assets/data/menu.json";

class Content extends Component {
  state = {
    itemList: [],
  };
  componentDidMount() {
    this.setState({
      itemList: data.results,
    });
  }
  render() {
    return (
      <div className="container bg-secondary">
        <ItemList list={this.state.itemList} />
      </div>
    );
  }
}

export default Content;
