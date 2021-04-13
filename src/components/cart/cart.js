import React, {useContext, useState} from 'react';
import {CartContext} from '../Context/CartContext';

export function Cart(){
    const {cart, setCart} = useContext(CartContext);
    console.log('cart ', cart);
    console.log('setCart ', setCart);
    

}