import React, { Component } from "react";
import Item from "./Item";

const ItemList = (props) => {
  const items = props.list.map((item) => (
    <Item
      id={item.id}
      name={item.name}
      price={item.price}
      ingredients={item.ingredients}
    />
  ));
  return (
    <>
      <div className="navbar-nav">
        <h1 className="h1 text-center">Menu</h1>
        <ul>{items}</ul>
      </div>
    </>
  );
};

export default ItemList;
