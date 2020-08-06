import React, { Component } from "react";
import ItemList from "./ItemList";

class Content extends Component {
  render() {
    return (
      <div className="container bg-secondary">
        <ItemList />
      </div>
    );
  }
}

export default Content;
