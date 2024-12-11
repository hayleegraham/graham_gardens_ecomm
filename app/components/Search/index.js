import "./Search.scss";
import { AppContext } from "@/app/components/AppContext";
import React, { useState, useContext } from "react";
import { useRouter } from 'next/navigation';

export default function Search() {
  const { filterBySearch, searchVal, setSearchVal, setCategoryName } = useContext(AppContext);
  const router = useRouter();
  
  const searchClicked = () => {
    if(!searchVal) return
    filterBySearch(searchVal);
    setCategoryName("RESULTS:")
    if(window.location.pathname == "/"){
      router.push("/shop_seeds")
    }
  }

  return (
    <div className="flex flex-row justify-center gap-[10px] my-[30px] h-[26px]">
      <label htmlFor="search">SEARCH SEEDS:</label>
      <input onChange={e => setSearchVal(e.target.value)} className="search_input w-[150px] sm:w-[300px]" type="text" id="search" name="search" value={searchVal}/>

      <input onClick={searchClicked} className="search_btn text-[13px] px-[10px] py-[5px] hover:scale-105 cursor-pointer" type="button" value="SEARCH"/>
    </div>
  );
}
