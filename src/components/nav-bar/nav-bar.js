import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";
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
                <li className="nav-item active"><Link to='/home' activeClassName="active" className="nav-link" href="#">Home<span className="sr-only"></span></Link></li>
                <li className="nav-item"><Link to={`/category/vestimenta`} className="nav-link" activeClassName="active" href="#">Vestimenta</Link></li>
                <li className="nav-item"><Link to={`/category/accesorios`} className="nav-link" activeClassName="active" href="#">Accesorios</Link></li>
                <li className="nav-item"><Link to={`/category/calzado`} className="nav-link" activeClassName="active" href="#">Calzado</Link></li>
            </ul>
            
            </div>
            <CartWidget />
            
        </div>
        </nav>




        </>
    );
};