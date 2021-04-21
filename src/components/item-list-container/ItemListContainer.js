import React, { useState,useEffect} from 'react';  
import {useParams} from 'react-router-dom';
import {products} from './products';
import {ItemList} from '../item-list/item-list';
import {getFirestore} from '../../firebase/client'
export default function ItemContainerList() {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {

      const db = getFirestore();
      const itemCollection = db.collection("items");
      const prom = itemCollection.get();
      const itemsVestimenta = itemCollection.where('categoryId','==','Vestimenta');
      const itemsCalzado = itemCollection.where('categoryId','==','Calzado');
      const itemsAccesorio = itemCollection.where('categoryId','==','Vestimenta');
      
      itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          console.log('sin resultados!');
        }

      setItems(querySnapshot.docs.map(doc => doc.data()));
      }).catch((err)=> {
        console.log("error en la busqueda", err);
      }).finally(() =>{
      
      });
        
      }, [categoryId]);

    return (
<div className="container">
    <h3>Items de la categoria {categoryId}</h3>
    
    <ItemList items={items}/>
     
    </div>
    );
};
