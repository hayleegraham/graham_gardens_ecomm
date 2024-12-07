'use client'
import React, { useState, useEffect, useContext } from "react";
import "./shop_seeds.scss";
import ProductList from "../components/ProductList";
import { AppContext } from "@/app/components/AppContext";
import Card from "@/app/components/Card";
import Link from "next/link";
import Search from "../components/Search";

export default function ShopSeeds() {

    const { data } = useContext(AppContext);
    const [allSeeds, setAllSeeds] = useState([]);

  useEffect(() => {
    if(data){
        setAllSeeds(data.products);
    }
    
  }, [data]);


    return (
        <div className="felx flex-col mx-auto">
            <Search />
            <div>Filter:</div>
        <div className="mx-auto xl:w-[1041px] xl:h-[2160px]">
        {allSeeds?.title && <h2 className="font-bold text-2xl text-center">{allSeeds.title}</h2>}
  
        <div className="relative flex justify-center xl:block">
          
            <div className="flex absolute left-0 flex-wrap">
              {allSeeds?.items?.map((seed) => (
                <Link href={`/product_detail?name=${seed.name.replace(/\s/g, '_').replace(/&/g, 'and')}`} key={seed.name}>
                  <Card key={seed.name} data={seed} />
                </Link>
              ))}
            </div>
        </div>
      </div>
      </div> 
    );
  }
  