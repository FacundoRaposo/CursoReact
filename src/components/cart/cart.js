import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../Context/CartContext';

export const Cart =() =>{
    const {cart,removeItem,totalItems,totalPrice} = useContext(CartContext);
    const generarOrden =()=> {
        let orden = {}
        orden.buyer = {name:'Juan', phone: 'telefono', email:'hola@asas.com'}
        orden.total = totalPrice;
        orden.items = cart.map(cartItem =>{
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.cant;
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
                    <button onClick = {()=> removeItem(cartItem.item.id)}>borrar</button>
                    </div>)}
                    <div> Total: {totalPrice}, por {totalItems} productos </div>
                    </>
                )}
    
        </div>

    )
}