'use client'
import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

 const [cartItems, setCartItems] = useState([]);
 const [cartQty, setCartQty] = useState(0);

 useEffect(()=>{
  let currQty = 0;
  cartItems.forEach((item)=>{
    currQty += item.qty;
  })
  setCartQty(currQty);
  console.log("Cart Items:", cartItems)
 },[cartItems])
  
  const addProduct = (product, qty) => {
    const existingProduct = cartItems.find((item) => item.name === product.name);
    if(existingProduct){
      const newQty = existingProduct.qty + qty;
      setCartItems(prevCartItems => prevCartItems.map(item => 
        item.name === product.name ? { ...item, qty: newQty } : item
      ));
      console.log("existing qty:", existingProduct)
    }else{
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