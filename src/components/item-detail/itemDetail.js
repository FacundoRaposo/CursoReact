import React, {Component, useState,useEffect, useContext} from 'react';  
import {products} from '../item-list-container/products';
import {ItemCount} from '../item-count/ItemCount';
import { Link,BrowserRouter, Route } from 'react-router-dom';
import {CartContext } from  "../Context/CartContext"

export default function ItemDetail({item}) {
        const [count, setCount] = useState(0)
        const {addItem, cart} = useContext(CartContext);

        const addHandler = (contador)=>{
            console.log('se agrego un item', contador)
            setCount(contador)
        }

        const terminarCompra = () =>{
            addItem(item, count)
        }  
        
        const cartCount = () =>{
            let cant = 0;
            let itemIdx = cart.findIndex(cartItem => cartItem.prod.id === item.id);
            if (itemIdx !== -1){
                cant = cart[itemIdx].cant;
            }
            return cant;
        }
    
        return <>
                <div className="col-lg-4">
                <img style={{maxWidth: '300px'}} src={item?.pictureUrl} alt=""/>
                <h2>{item?.title}</h2>
                <p>Descripcion : {item?.description}</p>
                <div>${item?.price}</div>
                
                {count}
                { count == 0 ?
                        <ItemCount stock="6" initial="2" onAdd={addHandler} />
                            :
                            <Link to='/cart'>
                                <button onClick={terminarCompra}>Terminar mi compra</button>
                            </Link> 
    
                }
                
                </div>
      </>;
}
