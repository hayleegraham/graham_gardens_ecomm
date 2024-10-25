"use client";
import { useRef , useEffect} from "react";
import {useMedia} from 'react-use';

import "./Carousel.scss";
import Card from "@/app/components/Card";

export default function Carousel({ title, data }) {
  const ref = useRef();
  let curPos = 0;

  const isWide = useMedia('(min-width: 1280px)');

  useEffect(() => {
    ref.current.style.left = `0px`;
  }, [isWide]);

  const moveLeft = () => {
    let cardsOnScreen = isWide? 3 : 1;
    if (curPos + cardsOnScreen < data.length) {
      curPos++;
      const newLeft = curPos * -345;
      ref.current.style.left = `${newLeft}px`;
    }
  };
  const moveRight = () => {
    console.log(data.length, curPos);
    if (curPos != 0) {
      curPos--;
      const newLeft = curPos * -345;
      ref.current.style.left = `${newLeft}px`;
    }
  };
  return (
    <div className="carousel">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="relative h-[440px]">
        <div className="mask">
          <div ref={ref} className="track">
            {data.map((seed) => (
              <Card
                key={seed.name}
                image={seed.image}
                name={seed.name}
                variety={seed.variety}
                brand={seed.brand}
                price={seed.price}
              />
            ))}
          </div>
        </div>
        <span className="material-symbols-outlined cursor-pointer" style={{left:'-75px', top:'150px'}} onClick={moveRight}>
            arrow_left
        </span>
        <span className="material-symbols-outlined cursor-pointer" style={{left:'857px', top:'150px'}} onClick={moveLeft}>
            arrow_right
        </span>
      </div>
    </div>
  );
}
