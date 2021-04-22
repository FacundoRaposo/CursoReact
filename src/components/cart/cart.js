import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../Context/CartContext';

export const Cart =() =>{
    const {cart,removeItem,totalItems,totalPrice} = useContext(CartContext);
    const generarOrden =()=> {
        let orden = {}
        orden.buyer = {nam:'Juan', phone: 'telefono', email:'hola@asas.com'}
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem =>{
            const id = cartItem.prod.item.id;
            const title = cartItem.prod.item.title;
            const price = cartItem.prod.item.price * cartItem.cant;
            return {id,title, price}
        });

    }
    
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