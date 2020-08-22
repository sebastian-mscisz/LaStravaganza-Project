import React from "react";
import { NavLink } from "react-router-dom";

const MenuButton = () => {
  return (
    <NavLink to="/menu">
      <button className="btn btn-outline-secondary">
        <span className="fas fa-pizza-slice"></span>
        <span>
          <strong> Przejdź do Menu</strong>
        </span>
      </button>
    </NavLink>
  );
};

export default MenuButton;
