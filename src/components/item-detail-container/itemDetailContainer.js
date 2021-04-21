import React, { useState,useEffect} from 'react';  
import ItemDetail from '../item-detail/itemDetail';
import {useParams} from 'react-router-dom';
import {products} from '../item-list-container/products'

import {getFirestore} from '../../firebase/client';

const getItems = (id) => {
    const db = getFirestore();
    const itemColletion = db.collection('items')

    const item = itemColletion.doc(id)

    return item.get();
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId} = useParams();

    useEffect(() => {

       getItems(itemId).then((res)=>{
           console.log('existe?', res.exists);
        if (res.exists){
            setItem(res.data())
        }})
      
       }, [itemId]);
        

    return <ItemDetail item={item} />
}