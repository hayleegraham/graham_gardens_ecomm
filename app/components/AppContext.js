"use client";
import React, { createContext, useState, useEffect, useRef } from "react";
import Fuse from 'fuse.js';

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
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState();
  const [cartVisible, setCartVisible] = useState(false);
  const [displayedSeeds, setDisplayedSeeds] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [buyNowPrice, setBuyNowPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(2.99);
  const fuse = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch("https://garden.grahamslams.com/api.php");
      const jsonData = await apiData.json();
      //reorder images for pdp display 
      const formatProducts = jsonData.products.items.map((product)=> {
        //put the first image at end of array because second image is primary image for pdp
        product.image.productImages.push(product.image.productImages.shift());
        return product;
      })
      const dataWithCategories = jsonData.products.items.map((product)=> {
        const foundCatName = jsonData.categories.filter((category) => {
          return category.cat_id == product.cat_id
        })
        let catName = foundCatName[0].cat_name == "Veggies" ? "Veggies Vegetables" : foundCatName[0].cat_name
        product.cat_name = catName;
        return product;
      })
      setData(jsonData);
      setProducts(formatProducts);
      setCategories(jsonData.categories);
      setDisplayedSeeds(jsonData.products.items);
      setCategoryName(jsonData.products.title);
      const options = {
        includeScore: true,
        threshold: 0.4,
        keys: ['name', 'brand', 'variety', 'cat_name']
      }
      fuse.current = new Fuse(dataWithCategories, options)
      //console.log("api data:", dataWithCategories)
    };

    fetchData();
  }, []);

  //fires anytime cartItems is changed
  useEffect(() => {
    //calculates current cart qty
    let currQty = 0;
    let currPrice = 0;
    let formattedPrice = 0;
    cartItems.forEach((item) => {
      currQty += item.qty;
      currPrice += (item.qty * item.price);
    });
    if(currPrice < 25 && cartItems.length > 0){
      setShippingPrice(2.99);
      formattedPrice = (currPrice + shippingPrice).toFixed(2);
    }else{
      setShippingPrice(0);
      formattedPrice = currPrice.toFixed(2);
    }
    setCartQty(currQty);
    setTotalPrice(formattedPrice);
    //add cart items to local storage
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    //console.log("Cart Items:", cartItems);
  }, [cartItems, shippingPrice]);

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

  const removeProduct = (prodName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== prodName));

  }

  const resetCart = () => {
    setCartItems([]);
  }

  const addBuyNow = (product, qty) => {
    product.qty = qty;
    setBuyNowItem(product);
    setCartVisible(true);
  }

  const removeBuyNow = () => {
    setBuyNowItem(null);
  }

  //fires anytime buy now item is changed
  useEffect(() => {
    let formattedPrice = 0;
    if(!buyNowItem) return
    //calculate total price for Buy Now Item 
    const currPrice = (buyNowItem.qty * buyNowItem.price);
    if(currPrice < 25){
      setShippingPrice(2.99);
      formattedPrice = (currPrice + shippingPrice).toFixed(2);
    }else{
      setShippingPrice(0);
      formattedPrice = currPrice.toFixed(2);
    }
    setBuyNowPrice(formattedPrice);
  }, [buyNowItem, shippingPrice]);

  //when card on homepage is clicked, return data for clicked item
  const getProductByName = (prodName) => {
    const prodData = products.find(
      (item) => item.name === prodName
    )
    //console.log("product data from context", prodData);
    return prodData;
  }

  const filterByCategory = (category) => {
    const filteredSeeds = data.products.items.filter((item) => {
      if (category === "") return true;
      return item.cat_id == category;
    });
    setDisplayedSeeds(filteredSeeds);
    setSearchVal("");
    setErrorMsg("");
  }

  const filterBySearch = (searchVal) => {
    setErrorMsg("");
    setSelectedCategory("");
    const result = fuse.current.search(searchVal)
    const searchResults = result.map((searchItem) => {
      return searchItem.item;
    })
    if(!result.length) {
      setErrorMsg("Oops! We didn't find anything, but have a look at our Best Sellers!")
      return setDisplayedSeeds(data.bestSellers.items)
      
    }
    setDisplayedSeeds(searchResults);
  }

  const resetSearch = () => {
    setSearchVal("");
    setDisplayedSeeds(data.products.items);
    setErrorMsg("")
  }

  return (
    <AppContext.Provider
      value={{
        addProduct,
        cartItems,
        cartQty,
        data,
        products,
        categories,
        getProductByName,
        cartVisible,
        setCartVisible,
        totalPrice,
        removeProduct,
        displayedSeeds,
        filterByCategory,
        filterBySearch,
        setSearchVal,
        searchVal,
        resetSearch,
        errorMsg,
        resetCart,
        setSelectedCategory,
        selectedCategory,
        categoryName,
        setCategoryName,
        addBuyNow,
        buyNowItem,
        buyNowPrice,
        removeBuyNow,
        shippingPrice
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
