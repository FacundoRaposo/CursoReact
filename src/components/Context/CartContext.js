import React, {useEffect, useState} from 'react';


export const CartContext = React.createContext();


export const CartProvider = ({defaultValue = [] ,children})=> {
    const [cart,setCart] = useState(defaultValue);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect (()=>{
        let cartLength =cart.reduce((accumulator, currentValue) => {return accumulator + currentValue.cant}, 0);
       
        let cartTotalPrice = cart.reduce((accumulator, currentValue) => { return accumulator + currentValue.cant * currentValue.prod.item.price },0);
                console.log("cartotalprice");
           
        setTotalItems(cartLength);
        setTotalPrice(cartTotalPrice);
    }, [cart])


    const addItem = (newItem, newQuantity) => {
        let itemIndex = cart.findIndex(item => item.prod.id === newItem.id );
        if(itemIndex === -1){
            setCart (cart => [...cart, {prod: newItem, cant: newQuantity}]);
        }else{
            let modifiedCart = [...cart];
            modifiedCart[itemIndex].cant += newQuantity;
            setCart(modifiedCart);
        }
    }// agregar x cantidad de un producto

    const removeItem = (itemId)=>{
        const newCart = cart.filter(e=> e.item.id !== itemId);
        setCart(newCart);

    }// sacar un item del carrito

    const clear = ()=>{

        setCart([])
    } //sacar todos los items del carrito

    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.item.id === id);

        return currentItem ? true : false;
    }

    return <CartContext.Provider value={{cart,addItem,removeItem, clear,isInCart,totalItems, totalPrice}}>{children}</CartContext.Provider>
}