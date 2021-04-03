import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link,BrowserRouter, Route } from 'react-router-dom';

export default function CartWidget() {
    return (<Link to="/cart"><span><FontAwesomeIcon icon={faShoppingCart} /></span></Link>);

}