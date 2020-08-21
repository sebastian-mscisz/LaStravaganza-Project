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
    <NavLink
      to={item.path}
      exact={item.exact ? item.exact : false}
      activeClassName="active"
    >
      <li key={item.name} className="nav-item mr-3">
        {item.name == "Koszyk" ? (
          <span className="menuItem">
            {item.name}&nbsp;
            <span className="fas fa-shopping-cart"></span>
          </span>
        ) : (
          <span className="menuItem">{item.name}</span>
        )}
      </li>
    </NavLink>
  ));
  return <ul className="navbar-nav">{menu}</ul>;
};

export default Menu;
