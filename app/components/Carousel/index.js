'use client'
import { useRef } from 'react';
import styles from "./Carousel.module.css";
import Card from "@/app/components/Card";


export default function Carousel({title, data}) {
    const ref = useRef();
    let curPos = 0;
    
    const moveLeft = ()=> {
        if(curPos + 3 < data.length) {
            curPos++;
            const newLeft = curPos * -345;
            ref.current.style.left =  `${newLeft}px`;
        }
    }
    const moveRight = ()=> {
        console.log(data.length, curPos)
        if(curPos != 0) {
            curPos--;
            const newLeft = curPos * -345;
            ref.current.style.left =  `${newLeft}px`;
        }
    }
    return(
        <div>
            <h2>{title}</h2>
            <div className={styles.mask_cont}>
                <div className={styles.mask}>
                    <div ref={ref} className={styles.track} >
                        {data.map((seed)=>
                        <Card key={seed.name} image={seed.image} name={seed.name} details={seed.details} price={seed.price}/>
                        )}
                    </div>
                </div>
            </div>
            <button onClick={moveLeft}>Go Left</button>
            <button onClick={moveRight}>Go Right</button>
        </div>
    )
}
