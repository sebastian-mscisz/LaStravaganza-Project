import React from "react";
import Item from "./Item";
import { CSSTransition } from "react-transition-group";

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
        <div className="toast" id="addToast">
          <div class="toast-header">
            <strong class="mr-auto">
              <span class="fas fa-check"></span> Dodano do koszyka!
            </strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentCenter",
            enterDone: "enterContentCenterDone",
          }}
        >
          <div className="text-center">
            <h1 className="d-inline-block border-bottom border-secondary pt-3">
              Menu
            </h1>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames={{
            appear: "appearContentCenter",
            enterDone: "enterContentCenterDone",
          }}
        >
          <ul className="list-group list-group-flush">{items}</ul>
        </CSSTransition>
      </>
    </>
  );
};

export default ItemList;
