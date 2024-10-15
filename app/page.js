import styles from "./page.module.css";
import Carousel from "./components/Carousel";

export default function Home() {
  const bestSellersData = [{
    name: 'Sunflower',
    image: "/sunflower.jpg",
    details: 'Brand: Ferry-Morse',
    price: '$5.00'
  },
  {
    name: 'Strawberry',
    image: "/strawberry.jpg",
    details: 'Brand: Ferry-Morse',
    price: '$5.00'
  },
  {
    name: 'Petunia',
    image: "/petunia.jpg",
    details: 'Brand: Ferry-Morse',
    price: '$5.00'
  }
]
const giftBoxData = [{
  name: 'All the Herbs',
  image: "https://nextjs.org/icons/globe.svg",
  details: 'Rosemary, Basil, Cilantro',
  price: '$15.00'
},
{
  name: 'Fruits & Veggies',
  image: 'image',
  details: 'Strawberries, Zuccini, Romaine Lettuce',
  price: '$15.00'
},
{
  name: 'Flower Bouquet',
  image: 'image',
  details: 'Petunias, Daisies, Roses',
  price: '$15.00'
}]
  return (
    <div>
      <Carousel title="Best Sellers" data={bestSellersData}/>


    </div>
         
  );
}
