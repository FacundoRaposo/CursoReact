import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import CartWidget from "../cart-widget/CartWidget";
import ContainerList from '../item-list-container/ItemListContainer';

export const NavBar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Red Sport</a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active"><a className="nav-link" href="#">Home<span className="sr-only"></span></a></li>
                <li className="nav-item"><a className="nav-link" href="#">Vestimenta</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Accesorios</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Calzado</a></li>
            </ul>
            
            </div>
            <CartWidget />
            
        </div>
        </nav>




        </>
    );
};