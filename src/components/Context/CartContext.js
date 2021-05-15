import React, { useEffect, useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let cartLength = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.cant;
    }, 0);

    let cartTotalPrice = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.cant * currentValue.prod.price;
    }, 0);
    setTotalItems(cartLength);
    setTotalPrice(cartTotalPrice);
  }, [cart]);

  const addItem = (newItem, newQuantity) => {
    console.log("newitem" + newItem);
    let itemIndex = cart.findIndex((e) => e.prod.id === newItem.id);
    console.log("itemindex" + itemIndex);
    if (itemIndex === -1) {
      setCart((cart) => [...cart, { prod: newItem, cant: newQuantity }]);
    } else {
      let modifiedCart = [...cart];
      console.log("modified cart " + modifiedCart);
      modifiedCart[itemIndex].cant += newQuantity;
      setCart(modifiedCart);
    }
  }; // agregar x cantidad de un producto
  console.log(cart);
  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.prod.id !== itemId);
    setCart(newCart);
  }; // sacar un item del carrito

  const clear = () => {
    setCart([]);
  }; //sacar todos los items del carrito

  const isInCart = (itemId) => {
    const currentItem = cart.find((e) => e.prod.id === itemId);
    console.log(currentItem);
    return currentItem ? true : false;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
