import Image from "next/image";
import "./Card.scss";

export default function Card({ image, name, variety, brand, price }) {
  return (
    <div className="card">
      <img height="185px" width="305px" src={image}></img>
      <h3>{name}</h3>
      <p>{variety}</p>
      <p>{brand}</p>
      <p>{price}</p>
      <div className="qty_cont">
        <button>-</button>
        <div>1</div>
        <button>+</button>
      </div>
      <button className="main_btn">ADD TO CART</button>
      <button className="main_btn">BUY NOW</button>
    </div>
  );
}
