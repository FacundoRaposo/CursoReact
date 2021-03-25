import React, { useState,useEffect} from 'react';  
import ItemDetail from '../item-detail/itemDetail';



const getItems = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                {
                id:1, 
                title:"Bolso Puma", 
                price:7000,
                description:"Bolso unisex talle L", 
                img: ""
            })},2000)
})
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        
        return;
    }, [])
        

    return <ItemDetail item={item} />
}