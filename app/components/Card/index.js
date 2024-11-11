import { useState } from "react";
import "./Card.scss";

export default function Card({ data }) {

  const [count, setCount] = useState(0);

  const countUp = () =>{
    setCount(count + 1)

  }
  const countDown = () =>{
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <div className="card xl:w-[307px] w-[282px]">
      <img className="max-w-none h-[185px] xl:w-[305px] w-[280px]" src={data.image}></img>
      <h3 className="font-bold text-lg">{data.name}</h3>
      <p>Variety: {data.variety}</p>
      {data.brand && <p>Brand: {data.brand}</p>}
      <p>${data.price} ({data.qty} seeds)</p>
      <div className="qty_cont">
        <button onClick={countDown}>-</button>
        <div className="pt-[2px]">{count}</div>
        <button onClick={countUp}>+</button>
      </div>
      <button className="main_btn text-[13px]">ADD TO CART</button>
      <button className="main_btn text-[13px]">BUY NOW</button>
    </div>
  );
}
