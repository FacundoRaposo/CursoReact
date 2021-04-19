import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link,BrowserRouter, Route } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'

export const CartWidget = () => {
    const {totalItems} = useContext(CartContext) 
    return <>
    {totalItems? <Link to="/cart"><span>{totalItems}<FontAwesomeIcon icon={faShoppingCart } /></span></Link>: null}
    </>
}