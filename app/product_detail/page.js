"use client";
import "./product_detail.scss";
import { AppContext } from "@/app/components/AppContext";
import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";

export default function ProductDetail() {
  const { getProductByName, products, addProduct } = useContext(AppContext);
  const [prodData, setProdData] = useState(null);
  const [count, setCount] = useState(1);

  const searchParams = useSearchParams();
  const urlName = searchParams.get("name");

  // Replace the placeholders back to their original characters
  const prodName = urlName.replace(/_/g, " ").replace(/and/g, "&");

  useEffect(() => {
    if (products && !prodData) {
      const data = getProductByName(prodName);
      setProdData(data);
      console.log("products pdp:", data);
    }
  }, [products]);

  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addProduct({ ...prodData }, count);
  };

  return (
    <div>
      {prodData ? (
        <div>
          <h1 className="font-bold text-3xl text-center my-[30px]">{prodData.name}</h1>
          <div className="flex text-center flex-row justify-center gap-[50px] my-[30px]">
            <div className="flex flex-col items-center w-[500px] gap-[30px]">
              <img
                className="max-w-none xl:h-[303px] xl:w-[500px] w-[280px]"
                src={prodData.image}
              ></img>
            
            </div>
            <div className="flex text-left items-left flex-col gap-[15px] w-[670px]">
              <p>
              <span className="font-bold">${prodData.price}</span> ({prodData.qty} seeds)
              </p>
              <div className="qty_cont w-[120px]">
                <button onClick={countDown}>-</button>
                <div className="pt-[2px] text-center">{count}</div>
                <button onClick={countUp}>+</button>
              </div>
              <div className="flex flex-row gap-[15px]">
                <button
                  className="main_btn text-[13px]"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <button className="main_btn text-[13px]">BUY NOW</button>
              </div>
              <p><span className="font-bold">Variety:</span> {prodData.variety}</p>
              {prodData.brand && <p><span className="font-bold">Brand:</span> {prodData.brand}</p>}
              <p><span className="font-bold">Sun:</span> {prodData.sun}</p>
              <p><span className="font-bold">When to Plant:</span> {prodData.plant_time}</p>
              {prodData.spacing && <p><span className="font-bold">Spacing:</span> {prodData.spacing}</p>}
              <p className="mt-[15px]">{prodData.desc}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
