import React from "react";
import AddToCartButton from "./AddToCartButton";

const Item = (props) => {
  return (
    <li className="list-group-item bg-primary border-secondary" key={props.id}>
      <div className="row">
        <div className="col-9 m-auto">
          <h4>
            {props.id}. {props.name}
          </h4>
        </div>
        <div className="col-3 text-right m-auto">
          <p className="text-secondary m-auto">
            <strong>{props.price}</strong>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm m-auto">
          <p className="m-auto pt-2 pb-2">
            <em>{props.ingredients}</em>
          </p>
        </div>
        <div className="pb-2 pt-3 col-sm text-sm-right">
          <AddToCartButton
            id={props.id}
            name={props.name}
            price={props.price}
            ingredients={props.ingredients}
            handleAddItem={props.handleAddItem}
          />
        </div>
      </div>
    </li>
  );
};

export default Item;
