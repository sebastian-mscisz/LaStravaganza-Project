import React, { Component } from "react";
import ItemList from "../layouts/ItemList";
import data from "../../assets/data/menu.json";

class MenuPage extends Component {
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
      <div className="container">
        <ItemList
          list={this.state.itemList}
          handleAddItem={this.props.handleAddItem}
        />
      </div>
    );
  }
}

export default MenuPage;
