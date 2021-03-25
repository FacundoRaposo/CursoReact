import React from 'react';  


export default function ItemDetail({item}) {
    console.log("item" , item);
    return (
        <>
        <div className="container-fluid">
            <p>
            Modelo: {item?.title} <br/>
            Precio: {item?.price} <br/>
            Descripcion: {item?.description} <br/>
             {item?.img} <br/>
            </p>
        </div>

        </>
    )}

