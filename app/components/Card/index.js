import Image from 'next/image';
import cardStyles from "./Card.module.css"

export default function Card({image, name, details, price, styles}) {
    return (
      <div className={cardStyles.test}>
        <img src={image}></img>
        <h3>{name}</h3>
        <p>{details}</p>
        <p>{price}</p>
      </div>
      
    );
  }