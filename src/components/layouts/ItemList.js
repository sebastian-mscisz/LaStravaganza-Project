import React from "react";
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
      <>
        <div className="text-center">
          <h1 className="d-inline-block border-bottom border-secondary pt-3">
            Menu
          </h1>
        </div>
        <ul className="list-group list-group-flush">{items}</ul>
      </>
    </>
  );
};

export default ItemList;
