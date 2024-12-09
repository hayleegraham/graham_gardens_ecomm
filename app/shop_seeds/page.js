"use client";
import React, { useState, useEffect, useContext } from "react";
import "./shop_seeds.scss";
import { AppContext } from "@/app/components/AppContext";
import Card from "@/app/components/Card";
import Link from "next/link";
import Search from "../components/Search";

export default function ShopSeeds() {
  const { data, categories } = useContext(AppContext);
  const [allSeeds, setAllSeeds] = useState([]);
  const [displayedSeeds, setDisplayedSeeds] = useState([]);

  //filter by category when dropdown option is selected
  const handleChange = (event) => {
    const currCategory = event.target.value;
    const filteredSeeds = allSeeds.items.filter((item) => {
      if (currCategory === "") return true;
      return item.cat_id == currCategory;
    });
    setDisplayedSeeds(filteredSeeds);
  };

  useEffect(() => {
    if (data) {
      setAllSeeds(data.products);
      setDisplayedSeeds(data.products.items);
    }
  }, [data]);

  return (
    <div className="felx flex-col mx-auto">
      <Search />
      <div>
        <label htmlFor="categories">Select a Category:</label>
        <select id="categories" name="categories" onChange={handleChange}>
          <option value="">All Seeds</option>
          {categories?.map((category) => (
            <option key={category.cat_id} value={category.cat_id}>
              {category.cat_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-auto xl:w-[1041px] xl:h-[2160px]">
        <h2 className="font-bold text-2xl text-center">{allSeeds.title}</h2>
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
