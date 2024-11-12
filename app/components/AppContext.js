'use client'
import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

 const [cartItems, setCartItems] = useState([]);
 const [cartQty, setCartQty] = useState(0);

 //fires anytime cartItems is changed
 //calculates current cart qty
 useEffect(()=>{
  let currQty = 0;
  cartItems.forEach((item)=>{
    currQty += item.qty;
  })
  setCartQty(currQty);
  console.log("Cart Items:", cartItems)
 },[cartItems])
  
  const addProduct = (product, qty) => {
    //find returns first item in array that matches product name
    const existingProduct = cartItems.find((item) => item.name === product.name);
    if(existingProduct){
      //if product is already in cart, only update qty
      const newQty = existingProduct.qty + qty;
      setCartItems(prevCartItems => prevCartItems.map(item => 
        item.name === product.name ? { ...item, qty: newQty } : item
      ));
    }else{
      //if not already in cart, add item to cart
      product.qty = qty;
      setCartItems((prevCartItems) => [
        ...prevCartItems, product
        
      ]);
    }
    
  };
       

  return (
    <AppContext.Provider
      value={{
        addProduct,
        cartItems,
        cartQty
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };