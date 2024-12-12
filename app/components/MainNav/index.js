"use client";
import { useState, useRef, useEffect, useContext } from "react";
import { useMedia } from "react-use";
import { AppContext } from "@/app/components/AppContext";
import "./MainNav.scss";
import Link from "next/link";

export default function MainNav() {
  const [isVisible, setIsVisible] = useState();
  const isWide = useMedia("(min-width: 768px)");
  const ref = useRef();
  const { cartQty, setCartVisible } = useContext(AppContext);

  useEffect(() => {
    isWide
      ? (ref.current.style.display = "flex")
      : (ref.current.style.display = "none");
  }, [isWide]);

  const displayNav = () => {
    setIsVisible(!isVisible);
  };
  
  const displayCart = () => {
    setCartVisible(true)
    console.log("cart clicked, is visable")
  }

  return (
    <div className="header_cont">
      <div className="offers text-base font-bold text-center lg:block hidden">
        FREE SHIPPING FOR ORDERS OVER $25
      </div>
      <div
        className="flex flex-row xl:justify-between justify-center nav_cont items-center px-[50px] md:h-[74px]"
        style={{ height: isVisible ? "174px" : "74px" }}
      >
        <div className="xl:flex flex-row items-center gap-[20px] w-[300px] hidden">
          <div className="circle">
            <img src="/flower_growing.gif"></img>
          </div>
          <h1 className="text-[25px] font-bold">
            <Link href="/">
              Graham Gardens
            </Link>
          </h1>
        </div>
        <img
          src="/hamburger.png"
          className="md:hidden block mr-[40px] w-[25px] h-[25px] cursor-pointer"
          onClick={displayNav}
        ></img>
        <ul
          className="md:flex xl:gap-[35px] gap-[15px] flex-col md:flex-row mr-[50px] md:mr-0"
          style={{ display: isVisible ? "flex" : "none" }}
          ref={ref}
        >
          <li>
            <Link className="text-base" href="/shop_seeds">
              SHOP SEEDS
            </Link>
          </li>
          <li>
            <Link className="text-base" href="/contact">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link className="text-base" href="/">
              GARDENING GUIDE
            </Link>
          </li>
        </ul>
        <div className="flex flex-row lg:w-[300px] sm:w-[100px] w-[40px] justify-end">
          <div className="flex flex-row gap-[5px]">
            <img
              src="/cart.png"
              className="w-[25px] h-[25px] cursor-pointer"
              onClick={displayCart}
            ></img>
            <div>({cartQty})</div>
          </div>
        </div>
      </div>
    </div>
  );
}
