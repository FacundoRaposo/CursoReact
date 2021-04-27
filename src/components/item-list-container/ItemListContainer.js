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
      let docRef;

      if (categoryId) {

        docRef = db.collection("items").where("categoryId", "==", categoryId);
  
      } else { 
        docRef = db.collection("items"); 
      }
  
      docRef.get().then((querySnapshot) => {
  
        if (querySnapshot.size === 0) { 
          console.log("No existen resultados"); 
        }
  
        setItems(querySnapshot.docs.map(doc => { 
          return {...doc.data(), id: doc.id }
        }
          
        ));

      });
    }, [categoryId]);

    return (
<div className="container">
    <h3>Items de la categoria {categoryId}</h3>
    
    <ItemList items={items}/>
     
    </div>
    );
};
