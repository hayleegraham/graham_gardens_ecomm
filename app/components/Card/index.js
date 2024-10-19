import { useState } from "react";
import "./Card.scss";

export default function Card({ image, name, variety, brand, price }) {

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
    <div className="card">
      <img height="185px" width="305px" src={image}></img>
      <h3>{name}</h3>
      <p>{variety}</p>
      <p>{brand}</p>
      <p>{price}</p>
      <div className="qty_cont">
        <button onClick={countDown}>-</button>
        <div>{count}</div>
        <button onClick={countUp}>+</button>
      </div>
      <button className="main_btn">ADD TO CART</button>
      <button className="main_btn">BUY NOW</button>
    </div>
  );
}
