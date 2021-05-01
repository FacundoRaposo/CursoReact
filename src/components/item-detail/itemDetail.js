import React, { useState, useContext} from 'react';  
import {ItemCount} from '../item-count/ItemCount';
import { Link } from 'react-router-dom';
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

    
        return <>
                <div className="col-lg-4 center">
                <img style={{maxWidth: '300px'}} src={item?.pictureUrl} alt=""/>
                <h2>{item?.title}</h2>
                <p>Descripcion : {item?.description}</p>
                <div>${item?.price}</div>
                <div className="center">
                { count === 0 ?
                        <ItemCount stock="6" initial="1" onAdd={addHandler} />
                            :
                            <Link to='/cart'>
                                <button onClick={terminarCompra}>Terminar mi compra</button>
                            </Link> 
    
                }
                </div>
    
                
                </div>
      </>;
}

