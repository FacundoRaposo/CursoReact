import React, {Component, useState,useEffect} from 'react';  
import {ItemCount} from '../item-count/ItemCount';
import {useParams} from 'react-router-dom';
import {products} from './products';
import {ItemList} from '../item-list/item-list';

export default function ItemContainerList() {
    const [items, setItems] = useState([])

    const {categoryId} = useParams();

    useEffect(() => {
        const prom = new Promise((resolve,reject)=>{
            setTimeout(() => {

                if (categoryId) {
        
                  const productsFilter = products.filter((product) => {
        
                    return product.categoryId.toString() === categoryId;
        
                  });
        
                  resolve(productsFilter);
        
                } else resolve(products);
        
              }, 2000);
        
            });
        
            prom.then((resultado) => {
        
              setItems(resultado);
        
            });
        
          }, [categoryId]);

    return (
<div className="container">
    <h3>Items de la categoria {categoryId}</h3>
    <ItemList items={items}/>
    
    
    </div>
    );
};
