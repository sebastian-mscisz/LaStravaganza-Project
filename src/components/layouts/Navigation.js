import React from "react";
import { NavLink } from "react-router-dom";

const menuList = [
  { name: "Główna", path: "/", exact: true },
  { name: "Menu", path: "/menu" },
  { name: "Promocje", path: "/promo-deals" },
  { name: "O nas", path: "/about-us" },
  { name: "Kontakt", path: "/contact" },
  { name: "Koszyk", path: "/basket" },
];
const Menu = () => {
  const menu = menuList.map((item) => (
    <li key={item.name} className="nav-item">
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name == "Koszyk" ? (
          <span>
            {item.name}
            <span className="fas fa-shopping-cart"></span>
          </span>
        ) : (
          item.name
        )}
      </NavLink>
    </li>
  ));
  return <ul className="navbar-nav navbar-right">{menu}</ul>;
};

export default Menu;
