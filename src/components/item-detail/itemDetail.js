import React, {Component, useState,useEffect} from 'react';  
import {products} from '../item-list-container/products';
import {ItemCount} from '../item-count/ItemCount';
import { Link,BrowserRouter, Route } from 'react-router-dom';


export default function ItemDetail({item}) {
        const [count, setCount] = useState(0)
    
        const addHandler = (contador)=>{
            console.log('se agrego un item', contador)
            setCount(contador)
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
                                <button>Terminar mi compra</button>
                            </Link> 
    
                }
                
                </div>
      </>;
}

