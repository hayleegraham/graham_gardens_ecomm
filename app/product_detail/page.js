"use client";
import "./product_detail.scss";
import { AppContext } from "@/app/components/AppContext";
import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";

export default function ProductDetail() {
  const { getProductByName, products, addProduct } = useContext(AppContext);
  const [prodData, setProdData] = useState(null);
  const [count, setCount] = useState(1);
  const [mainImage, setMainImage] = useState("");

  const searchParams = useSearchParams();
  const urlName = searchParams.get("name");

  // Replace the placeholders back to their original characters
  const prodName = urlName.replace(/_/g, " ").replace(/and/g, "&");

  useEffect(() => {
    if (products && !prodData) {
      const data = getProductByName(prodName);
      setProdData(data);
      setMainImage(data.image.productImages[0]);
      //console.log("pdp imgs:", data);
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

  // replace the main image with the clicked image
  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <div>
      {prodData ? (
        <div>
          <h1 className="font-bold text-3xl text-center my-[30px]">
            {prodData.name}
          </h1>
          <div className="flex text-center sm:flex-row flex-col sm:items-start items-center justify-center gap-[50px] my-[30px] mr-[10px]">
            <div className="flex flex-col items-center w-[550px] gap-[20px]">
              <div className="shadow-xl p-5 bg-[rgba(203,226,211,0.5)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border rounded-2xl border-solid border-[rgba(203,226,211,0.6)]">
             <img
                className="max-w-none xl:h-[380px] xl:w-[500px] sm:w-[350px] w-[280px] xl:ml-[0] ml-[10px] object-contain "
                src={mainImage}
              ></img>
              </div>
              <div className="flex flex-row flex-wrap justify-center xl:ml-[0] ml-[10px] lg:w-[550px] w-[200px] gap-[5px]">
              {prodData.image.productImages.map((img)=> (
                <img
                  key={img}
                  className="max-w-none h-[100px] w-[100px] object-cover hover:shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer"
                  src={img}
                  onClick={() => handleImageClick(img)} // Replace the image on click
                ></img>
              ))}
              </div>
            </div>
            <div className="flex text-left sm:items-start items-center flex-col gap-[15px] sm:w-[670px] w-[300px] sm:p-[0] px-[10px]">
              <p>
                <span className="font-bold">${prodData.price}</span> (
                {prodData.qty} seeds)
              </p>
              <div className="qty_cont w-[120px]">
                <button onClick={countDown}>-</button>
                <div className="pt-[2px] text-center">{count}</div>
                <button onClick={countUp}>+</button>
              </div>
              <div className="flex flex-row gap-[15px] mb-[20px] mt-[5px]">
                <button
                  className="main_btn text-[13px] h-[30px] w-[100px]"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <button className="main_btn text-[13px] h-[30px] w-[100px]">
                  BUY NOW
                </button>
              </div>
              <p>
                <span className="font-bold">Variety:</span> {prodData.variety}
              </p>
              {prodData.brand && (
                <p>
                  <span className="font-bold">Brand:</span> {prodData.brand}
                </p>
              )}
              <p>
                <span className="font-bold">Sun:</span> {prodData.sun}
              </p>
              <p>
                <span className="font-bold">When to Plant:</span>{" "}
                {prodData.plant_time}
              </p>
              {prodData.spacing && (
                <p>
                  <span className="font-bold">Spacing:</span> {prodData.spacing}
                </p>
              )}
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
