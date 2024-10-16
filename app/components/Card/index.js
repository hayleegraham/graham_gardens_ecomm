import Image from 'next/image';
import styles from "./Card.module.css"

export default function Card({image, name, details, price}) {
    return (
      <div className={styles.test}>
        <img src={image}></img>
        <h3>{name}</h3>
        <p>{details}</p>
        <p>{price}</p>
      </div>
      
    );
  }