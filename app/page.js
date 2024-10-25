import styles from "./page.module.css";
import Carousel from "./components/Carousel";
import Search from "./components/Search";

export default function Home() {
  const bestSellersData = [{
    name: 'Sunflower',
    image: "/sunflower.jpg",
    variety: "Variety: Mammoth",
    brand: 'Brand: Ferry-Morse',
    price: '$5.00  (50 seeds)'
  },
  {
    name: 'Strawberry',
    image: "/strawberry.jpg",
    variety: "Variety: Alpine",
    brand: 'Brand: Monticello',
    price: '$4.00  (100 seeds)'
  },
  {
    name: 'Poppy',
    image: "/poppy.jpg",
    variety: "Variety: Red Corn",
    brand: 'Brand: Ferry-Morse',
    price: '$5.00  (100 seeds)'
  },
  {
    name: 'Petunia',
    image: "/petunia.jpg",
    variety: "Variety: Dwarf Mix",
    brand: 'Brand: Ferry-Morse',
    price: '$5.00  (100 seeds)'
  },

  {
    name: 'Green Onion',
    image: "/green_onion.jpg",
    variety: "Variety: Evergreen Bunching",
    brand: 'Brand: Botanical Interests',
    price: '$4.00  (100 seeds)'
  },
  {
    name: 'Romain Lettuce',
    image: "/romain_lettuce.jpg",
    variety: "Variety: Parris Island",
    brand: 'Brand: Ferry-Morse',
    price: '$3.00  (100 seeds)'
  }
]
const giftBoxData = [
  {
    name: 'Fruits & Veggies Gift Box',
    image: "/gift_box.jpg",
    variety: 'Strawberries, Tomato, Carrot, and Romaine Lettuce Seeds',
    price: '$18.00  (400 seeds)'
  },
  {
  name: 'All the Herbs Gift Box',
  image: "/gift_box.jpg",
  variety: 'Basil, Rosemary, Italian Parsley, and Cilantro Seeds',
  price: '$15.00  (400 seeds)'
},
{
  name: 'Flower Bouquet Gift Box',
  image: "/gift_box.jpg",
  variety: 'Sunflower, Petunia, Peonie, and Snapdragon Seeds',
  price: '$18.00  (400 seeds)'
}]
const forBeginnersData = [
  {
    name: 'Green Onion',
    image: "/green_onion.jpg",
    variety: "Variety: Evergreen Bunching",
    brand: 'Brand: Botanical Interests',
    price: '$4.00  (100 seeds)'
  },
  {
    name: 'Romain Lettuce',
    image: "/romain_lettuce.jpg",
    variety: "Variety: Parris Island",
    brand: 'Brand: Ferry-Morse',
    price: '$3.00  (100 seeds)'
  },
  {
    name: 'Petunia',
    image: "/petunia.jpg",
    variety: "Variety: Dwarf Mix",
    brand: 'Brand: Ferry-Morse',
    price: '$5.00  (100 seeds)'
  },
  {
    name: 'Sunflower',
    image: "/sunflower.jpg",
    variety: "Variety: Mammoth",
    brand: 'Brand: Ferry-Morse',
    price: '$5.00  (50 seeds)'
  },
  {
    name: 'Strawberry',
    image: "/strawberry.jpg",
    variety: "Variety: Alpine",
    brand: 'Brand: Monticello',
    price: '$4.00  (100 seeds)'
  },
  {
    name: 'Poppy',
    image: "/poppy.jpg",
    variety: "Variety: Red Corn",
    brand: 'Brand: Ferry-Morse',
    price: '$5.00  (100 seeds)'
  }
]
  return (
    <div>
      <Search />
      <Carousel title="TOP SELLERS" data={bestSellersData}/>
      <Carousel title="GIFT BOXES" data={giftBoxData}/>
      <Carousel title="GOOD FOR BEGINNERS" data={forBeginnersData}/>
    </div>
         
  );
}
