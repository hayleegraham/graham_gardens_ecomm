"use client";
import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //get cart items from local storage if exists
  const initializeCartItems = () => {
    if (typeof window !== "undefined") {
      const storedCartItems = window.localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    }
    return [];
  };

  const [cartItems, setCartItems] = useState(initializeCartItems);
  const [cartQty, setCartQty] = useState(0);
  const [products, setProducts] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch("https://garden.grahamslams.com/api.php");
      const jsonData = await apiData.json();

      setData(jsonData);
      setProducts(jsonData.products);
    };

    fetchData();
  }, []);

  //fires anytime cartItems is changed
  //calculates current cart qty
  useEffect(() => {
    let currQty = 0;
    cartItems.forEach((item) => {
      currQty += item.qty;
    });
    setCartQty(currQty);

    //add cart items to local storage
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const addProduct = (product, qty) => {
    //find returns first item in array that matches product name
    const existingProduct = cartItems.find(
      (item) => item.name === product.name
    );
    if (existingProduct) {
      //if product is already in cart, only update qty
      const newQty = existingProduct.qty + qty;
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.name === product.name ? { ...item, qty: newQty } : item
        )
      );
    } else {
      //if not already in cart, add item to cart
      product.qty = qty;
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    }
  };

  const getProductByName = (prodName) => {
    const prodData = products.items.find(
      (item) => item.name === prodName
    )
    console.log("data context", prodData);
    return prodData;
  }

  return (
    <AppContext.Provider
      value={{
        addProduct,
        cartItems,
        cartQty,
        data,
        products,
        getProductByName
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
