import React from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../cart-widget/CartWidget";

export const NavBar = () => {
  const categoryId = ["vestimenta", "accesorios", "calzado"];
  const categories = categoryId.map((category) => (
    <li className="nav-item">
      <NavLink to={`/category/${category}`} className="nav-link">
        {category}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="nav-link">
            Red Sport
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{categories}</ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};
