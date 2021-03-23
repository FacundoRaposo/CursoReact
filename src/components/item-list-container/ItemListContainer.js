import React, {Component, useState,useEffect} from 'react';  
import {ItemCount} from '../item-count/ItemCount';
import {ItemList} from '../item-list/item-list';

export default function ItemContainerList() {
    const [items, setItems] = useState([])
    useEffect(() => {
        const prom = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve([
                    {id:1, title:"bolso puma", price:7000, pictureUrl: "https://redsport.vteximg.com.br/arquivos/ids/1023122-1000-1000/GA040005445.jpg?v=637201607534870000"},
                    {id:2, title:"zapatilla puma", price:13000, pictureUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwabd276ba/products/PU_370678-14/PU_370678-14-1.JPG"},
                    {id:3, title:"future rider puma", price:10000, pictureUrl: "https://celadasa.vteximg.com.br/arquivos/ids/167422-1000-1000/371149-1-1.jpg?v=637336068173000000"},
                    {id:4, title:"carina puma", price:12000, pictureUrl: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/7/37032505_0.jpg"}
                ])
            },2000)
        })
        prom.then((resultado)=>{
            setItems(resultado)
        })
        
    })
    return (
<div className="container">
    <ItemList items={items}/>
    <ItemCount stock="6" initial="1"/>
    
    </div>
    );
};
