import React, { Component } from "react";

const Item = (props) => {
  console.log(props);
  return (
    <li key={props.id}>
      {props.name} - {props.price}
      <br />
      {props.ingredients}
      <hr />
    </li>
  );
};

export default Item;
