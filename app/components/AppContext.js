'use client'
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  
  const test = () => {
    console.log("context working")
    
  };
       

  return (
    <AppContext.Provider
      value={{
        test
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };