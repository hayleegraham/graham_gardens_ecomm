"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";
import Search from "./components/Search";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [giftBoxes, setGiftBoxes] = useState([]);
  const [forBeginners, setForBeginners] = useState([]);
  const [homeGroups, setHomeGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetch("http://localhost/garden_backend/api.php");
        const jsonData = await apiData.json();
        console.log("setting products", jsonData.products);
        
        setProducts(jsonData.products);
        setBestSellers(jsonData.bestSellers);
        setGiftBoxes(jsonData.giftBoxes)
        setForBeginners(jsonData.forBeginners)
        setHomeGroups(jsonData.homeGroups)
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
      <Carousel  data={bestSellers} />
      <Carousel data={giftBoxes} />
      <Carousel data={forBeginners} />
    </div>
  );
}
