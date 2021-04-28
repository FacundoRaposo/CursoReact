import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../Context/CartContext';
import {getFirestore, getFirebase} from '../../firebase/client';

export const Cart =() =>{

    const {cart,removeItem,totalItems,totalPrice,clear} = useContext(CartContext);
    const [name,setName] = useState('');
    const [phone,setPhone]= useState('');
    const [email,setEmail]= useState('');

    const [idOrden,setIdOrden]= useState(null);

    const generarOrden =(e)=> {
        e.preventDefault();
        const comprador = { name, phone, email }
        
        console.log(comprador)

        const db = getFirestore();

        const ordersCollection = db.collection("orders")

        //const date = getFirebase().firestore.Timestamp.fromDate(new Date());

        const items = cart.map(cartItem => {
            return {id: cartItem.prod.item.id, title: cartItem.prod.item.title, price: cartItem.prod.item.price} 
        })
        console.log(items);
        ordersCollection
        .add({buyer: comprador, items , total:totalPrice })
        .then(doc=>{
            setIdOrden(doc.id)
        })


        const itemsCollection = db.collection('items')
        .where(getFirebase().firestore.FieldPath.documentId(), 'in', cart.map(e => e.prod.item.id))

        itemsCollection.get()
        .then(resultado =>{

            const batch = db.batch()

            for (const documento of resultado) {

                const stockActual = documento.data().stock;

                const itemDelCart = cart.find(cartItem => cartItem.prod.item.id == documento.id);

                const cantidadComprado = itemDelCart.quantity

                const nuevoStock =  stockActual - cantidadComprado;


                batch.update(documento.ref,
                    {stock: nuevoStock}
                )
                //update
                
            }

            batch.commit()

        })

    }

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(totalItems === 0) return noItemComp
    
    return (
        
        <div>
            {idOrden? `Orden generada: ${idOrden}`: null}
            {cart.map(cartItem => <div key={cartItem.prod.item.id}>
                    <table className="table">
                    
                    <thead>
                    <tr>
                        <th scope="row"></th>
                        <th>
                         Titulo
                        </th>
                        <th>Cantidad</th>
                        <th></th>
                        <th></th>
                    </tr>    
                    </thead>                    
                    
                    <tbody>
                    
                        <tr>
                    <th scope="row"></th>
                        <td>
                        {cartItem.prod.item.title}
                        </td>
                        <td>{cartItem.cant}</td>
                        <td><img style={{maxWidth: '100px'}} src={cartItem?.prod.item.pictureUrl} alt=""/></td>
                        <td><button className="btn btn-danger"onClick = {()=> removeItem(cartItem.prod.item.id)}>borrar</button></td>
                    </tr>  
                    
                    </tbody>
                    
                    </table>
                    </div>)}
                    
                    
                   
                    <div> Total: {totalPrice}, por {totalItems} productos </div>
                    <button onClick={clear}>Borrar todo</button>

                    <div className="input-group center formulario">
                    <form  action=""  onSubmit={generarOrden}>

                    <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="phone"value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <input type="text" placeholder="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <button type="submit"> Generar orden</button>
                    </form>
                    </div>

                    </div>


    )
}