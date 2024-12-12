"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import "./shop_seeds.scss";
import { AppContext } from "@/app/components/AppContext";
import Card from "@/app/components/Card";
import Link from "next/link";
import Search from "../components/Search";

export default function ShopSeeds() {
  const {
    categories,
    displayedSeeds,
    filterByCategory,
    errorMsg,
    selectedCategory,
    setSelectedCategory,
    data,
    categoryName,
    setCategoryName,
    searchVal,
  } = useContext(AppContext);

  const [varHeight, setVarHeight] = useState();
  const isSmall = useRef();

  if (typeof window !== "undefined") {
    isSmall.current = window.innerWidth < 1280;
  }

  useEffect(() => {
    setSelectedCategory("");
    if (!searchVal) {
      setCategoryName(data?.products?.title);
    }
  }, []);

  //filter by category when dropdown option is selected
  const handleChange = (event) => {
    const currCategory = event.target.value;
    const currCatName = categories.filter((category) => {
      return category.cat_id == currCategory;
    });
    if (currCatName[0]) {
      setCategoryName(currCatName[0].cat_name.toUpperCase());
    } else {
      setCategoryName(data?.products?.title);
    }
    setSelectedCategory(currCategory);
    filterByCategory(currCategory);
  };

  useEffect(() => {
    if (errorMsg) {
      setCategoryName("");
    }
  }, [errorMsg]);

  //sets height of container div when amount of displayed seeds changes
  useEffect(() => {
    if (isSmall.current) {
      setVarHeight(displayedSeeds.length * 419 + 185);
    } else {
      if (displayedSeeds.length < 6 && displayedSeeds.length > 3) {
        setVarHeight((displayedSeeds.length / 2) * 419 + 185);
      } else {
        setVarHeight((displayedSeeds.length / 3) * 419 + 185);
      }
    }
  }, [displayedSeeds]);

  return (
    <div className="flex flex-col mx-auto" style={{ height: varHeight }}>
      <Search />
      <div>
        <label htmlFor="categories">Select a Category:</label>
        <select
          className="mx-[10px] my-[8px] rounded py-1 pl-4 !pr-8 cursor-pointer"
          id="categories"
          name="categories"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="">All Seeds</option>
          {categories?.map((category) => (
            <option key={category.cat_id} value={category.cat_id}>
              {category.cat_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-auto xl:w-[1041px] xl:h-[2150px] w-[310px]">
        <h2 className="font-bold text-2xl text-center">{categoryName}</h2>
        {errorMsg && <p className="text-center">{errorMsg}</p>}
        <div className="relative flex justify-center xl:block">
          <div className="flex absolute left-0 flex-wrap">
            {displayedSeeds?.map((seed) => (
              <Link
                href={`/product_detail?name=${seed.name
                  .replace(/\s/g, "_")
                  .replace(/&/g, "and")}`}
                key={seed.name}
                className="h-[419px]"
              >
                <Card key={seed.name} data={seed} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
