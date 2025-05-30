'use client'
 
import React, { useState, useEffect, useContext } from "react";
import "./globals.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import { AppContext } from "@/app/components/AppContext";

export default function Home() {
 
  const { data, resetSearch } = useContext(AppContext);
  const [bestSellers, setBestSellers] = useState([]);
  const [giftBoxes, setGiftBoxes] = useState([]);
  const [forBeginners, setForBeginners] = useState([]);

  useEffect(() => {
    if(data){
      setBestSellers(data.bestSellers);
      setGiftBoxes(data.giftBoxes)
      setForBeginners(data.forBeginners)
      resetSearch()
    }
    
  }, [data]);
  
  return (
    <div>
      <Search />
      <ProductList  data={bestSellers} />
      <ProductList data={giftBoxes} />
      <ProductList data={forBeginners} />
    </div>
  );
}
