import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../Context/CartContext';

export const Cart =() =>{
    const {cart,removeItem,totalItems,totalPrice} = useContext(CartContext);
    
    return (
        
        <div>
                {!cart.length ?  
                <h2>No hay items en el carrito <Link to="/home">Home</Link></h2>
                :(
                    <>
                    {cart.map(cartItem => <div key={cartItem.prod.item.id}>
                    <div>Titulo: {cartItem.prod.item.title}</div>
                    <div>Cantidad: {cartItem.cant}</div>
                    <button onClick = {()=> removeItem(cartItem.prod.item.id)}>borrar</button>
                    </div>)}
                    <div> Total: {totalPrice}, por {totalItems} productos </div>
                    </>
                )}
    
        </div>

    )
}