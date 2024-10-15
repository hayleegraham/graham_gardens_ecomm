import styles from "./Carousel.module.css";
import Card from "@/app/components/Card";


export default function Carousel({title, data}) {
    return(
        <div>
            <h2>{title}</h2>
            <div className={styles.card} >
                {data.map((seed)=>
                <Card image={seed.image} name={seed.name} details={seed.details} price={seed.price}/>
                )}
            </div>
        </div>
    )
}
