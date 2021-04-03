import React, { useState,useEffect} from 'react';  
import ItemDetail from '../item-detail/itemDetail';
import {useParams} from 'react-router-dom';
import {products} from '../item-list-container/products'



const getItems = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)},2000)
})
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId} = useParams();

    useEffect(() => {

        const promesa = new Promise((resolve) =>
      
         setTimeout(() => {
      
          resolve(products.find((product) => product.id === parseInt(itemId)));
      
         }, 3000)
      
        );
      
        promesa.then((product) => {
      
         setItem(product);
      
        });
      
       }, []);
        

    return <ItemDetail item={item} />
}