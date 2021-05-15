import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../cart-widget/CartWidget";
import { getFirestore } from "../../firebase/client";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="nav-link" href="#">
            Red Sport
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={`/category/vestimenta`}
                  className="nav-link"
                  activeClassName="active"
                >
                  Vestimenta
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/category/accesorios`}
                  className="nav-link"
                  activeClassName="active"
                >
                  Accesorios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/category/calzado`}
                  className="nav-link"
                  activeClassName="active"
                >
                  Calzado
                </Link>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};
