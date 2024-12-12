"use client";
import React, { useState, useEffect, useContext } from "react";
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

  return (
    <div className="felx flex-col mx-auto">
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
      <div className="mx-auto xl:w-[1041px] xl:h-[2150px]">
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
