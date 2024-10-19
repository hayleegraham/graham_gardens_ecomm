"use client";
import { useRef } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "./Carousel.scss";
import Card from "@/app/components/Card";

export default function Carousel({ title, data }) {
  const ref = useRef();
  let curPos = 0;

  const moveLeft = () => {
    if (curPos + 3 < data.length) {
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
      <h2>{title}</h2>
      <div className="mask_cont">
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
        <span className="material-symbols-outlined" style={{left:'-75px', top:'150px'}} onClick={moveLeft}>
            arrow_left
        </span>
        <span className="material-symbols-outlined" style={{left:'857px', top:'150px'}} onClick={moveRight}>
            arrow_right
        </span>
      </div>
    </div>
  );
}
