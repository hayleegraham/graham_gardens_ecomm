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
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500 
  };
  
  return (
    <div className="my-[20px] flex flex-col items-center">
          <Slider {...settings} className="xl:w-[1024px] xl:h-[529px] sm:w-[512px] sm:h-[264.5px] w-[256px] h-[132px]">
            <div className="xl:w-[1024px] xl:h-[529px] sm:w-[512px] sm:h-[264.5px] w-[256px] h-[132px]">
              <img src="/about1.jpg" alt="two staff members gardening" className="object-contain"></img>
            </div>
            <div className="xl:w-[1024px] xl:h-[529px] sm:w-[512px] sm:h-[264.5px] w-[256px] h-[132px]">
              <img src="/about2.jpg" alt="shaking hands" className="object-contain"></img>
            </div>
            <div className="xl:w-[1024px] xl:h-[529px] sm:w-[512px] sm:h-[264.5px] w-[256px] h-[132px]">
              <img src="/about3.jpg" alt="garden education" className="object-contain"></img>
            </div>
            <div className="xl:w-[1024px] xl:h-[529px] sm:w-[512px] sm:h-[264.5px] w-[256px] h-[132px]">
              <img src="/about4.jpg" alt="hands holding seedlings" className="object-contain"></img>
            </div>
            <div className="xl:w-[1024px] xl:h-[529px] sm:w-[512px] sm:h-[264.5px] w-[256px] h-[132px]">
              <img src="/about5.jpg" alt="community garden outreach" className="object-contain"></img>
            </div>
          </Slider>
    </div>
  );
}
