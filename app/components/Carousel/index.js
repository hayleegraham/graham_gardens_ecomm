"use client";
import React, { useRef , useEffect} from "react";
import Slider from "react-slick";
import {useMedia} from 'react-use';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";



export default function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 
  };
  
  return (
    <div className="my-[20px]">
          <Slider {...settings} className="w-[1024px] h-[529px]">
            <div className="w-[1024px] h-[529px]">
              <img src="/about1.jpg" className="object-contain"></img>
            </div>
            <div className="w-[1024px] h-[529px]">
              <img src="/about2.jpg" className="object-contain"></img>
            </div>
            <div className="w-[1024px] h-[529px]">
              <img src="/about3.jpg" className="object-contain"></img>
            </div>
            <div className="w-[1024px] h-[529px]">
              <img src="/about4.jpg" className="object-contain"></img>
            </div>
            <div className="w-[1024px] h-[529px]">
              <img src="/about5.jpg" className="object-contain"></img>
            </div>
          </Slider>
    </div>
  );
}
