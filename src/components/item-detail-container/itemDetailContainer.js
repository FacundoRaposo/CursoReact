import React, { useState,useEffect} from 'react';  
import ItemDetail from '../item-detail/itemDetail';
import {useParams} from 'react-router-dom';



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
                },
/*                 {
                    id:2,
                    title: "zapatilla",
                    price: 14000,
                    description: "zapatilla de color negra",
                }

            ] */
                )},2000)
})
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId} = useParams();

    useEffect(() => {
        getItems().then((res)=> setItem(res))
        
        return;
    }, [])
        

    return <ItemDetail item={item} />
}