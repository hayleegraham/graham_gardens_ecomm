import { useState, useContext } from "react";
import { AppContext } from "@/app/components/AppContext";
import "./Card.scss";

export default function Card({ data }) {
  const { addProduct, addBuyNow } = useContext(AppContext);
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
    setCount(1);
  }

  const handleBuyNow = (e) => {
    e.preventDefault();
    addBuyNow({...data}, count)
    //console.log(e)
  }

  return (
    <div className="card xl:w-[306.5px] w-[282px] xl:h-[379px]">
      <img className="max-w-none h-[185px] xl:w-[305px] w-[280.5px]" src={data.image.mainImage} alt={data.image.mainImage}></img>
      <h3 className="font-bold text-lg">{data.name}</h3>
      <p>Variety: {data.variety}</p>
      {data.brand && <p>Brand: {data.brand}</p>}
      <p>${data.price} ({data.qty} seeds)</p>
      <div className="qty_cont">
        <button onClick={countDown}>-</button>
        <div className="pt-[2px]">{count}</div>
        <button onClick={countUp}>+</button>
      </div>
      <button className="main_btn text-[13px] h-[25px] hover:shadow-xl hover:scale-105 active:scale-95" onClick={handleAddToCart}>ADD TO CART</button>
      <button className="main_btn text-[13px] h-[25px] hover:shadow-xl hover:scale-105 active:scale-95" onClick={handleBuyNow}>BUY NOW</button>
    </div>
  );
}
