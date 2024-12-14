import "./Search.scss";
import { AppContext } from "@/app/components/AppContext";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const { filterBySearch, searchVal, setSearchVal, setCategoryName, errorMsg } =
    useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if(errorMsg){
      setCategoryName("");
    }else if(!errorMsg && searchVal){
      setCategoryName("RESULTS:");
    }
  }, [errorMsg])

  const searchClicked = () => {
    if (!searchVal) return;
    filterBySearch(searchVal);
    if (window.location.pathname == "/") {
      router.push("/shop_seeds");
    }
  };

  //
  return (
    <div className="flex flex-row justify-center gap-[10px] my-[30px] h-[26px]">
      <label htmlFor="search" className="text-[15px] pt-[2px]">
        SEARCH SEEDS:
      </label>
      <input
        onChange={(e) => setSearchVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchClicked();
          }
        }}
        className="search_input w-[150px] sm:w-[300px]"
        type="text"
        id="search"
        name="search"
        value={searchVal}
      />

      <input
        onClick={searchClicked}
        className="search_btn text-[13px] px-[10px] py-[5px] hover:scale-105 cursor-pointer active:scale-95"
        type="button"
        value="SEARCH"
      />
    </div>
  );
}
