"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [giftBoxes, setGiftBoxes] = useState([]);
  const [forBeginners, setForBeginners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetch("https://garden.grahamslams.com/api.php");
        const jsonData = await apiData.json();
        
        setProducts(jsonData.products);
        setBestSellers(jsonData.bestSellers);
        setGiftBoxes(jsonData.giftBoxes)
        setForBeginners(jsonData.forBeginners)
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Search />
      <ProductList  data={bestSellers} />
      <ProductList data={giftBoxes} />
      <ProductList data={forBeginners} />
    </div>
  );
}
