import { useState, useContext } from "react";
import { AppContext } from "@/app/components/AppContext";
import "./Card.scss";

export default function Card({ data }) {
  const { addProduct } = useContext(AppContext);
  const [count, setCount] = useState(1);

  const countUp = (e) =>{
    e.preventDefault();
    setCount(count + 1)

  }
  const countDown = (e) =>{
    e.preventDefault();
    if(count > 0){
      setCount(count - 1)
    }
  }
  const handleAddToCart = (e) => {
    e.preventDefault();
    addProduct({...data}, count)
  }

  return (
    <div className="card xl:w-[307px] w-[282px] xl:h-[379px]">
      <img className="max-w-none h-[185px] xl:w-[305px] w-[280px]" src={data.image_1}></img>
      <h3 className="font-bold text-lg">{data.name}</h3>
      <p>Variety: {data.variety}</p>
      {data.brand && <p>Brand: {data.brand}</p>}
      <p>${data.price} ({data.qty} seeds)</p>
      <div className="qty_cont">
        <button onClick={countDown}>-</button>
        <div className="pt-[2px]">{count}</div>
        <button onClick={countUp}>+</button>
      </div>
      <button className="main_btn text-[13px] h-[25px]" onClick={handleAddToCart}>ADD TO CART</button>
      <button className="main_btn text-[13px] h-[25px]">BUY NOW</button>
    </div>
  );
}
