import React, { Component } from "react";
import Item from "./Item";

const ItemList = (props) => {
  const items = props.list.map((item) => (
    <Item
      id={item.id}
      name={item.name}
      price={item.price}
      ingredients={item.ingredients}
      handleAddItem={props.handleAddItem}
    />
  ));
  return (
    <>
      <div className="navbar-nav">
        <h1 className="text-center">Menu</h1>
        <ul className="list-group list-group-flush">{items}</ul>
      </div>
    </>
  );
};

export default ItemList;
