import Carousel from "../components/Carousel";
import "./contact.scss"
export default function Contact() {




    return (
      <div className="flex flex-col w-[1041px] justify-center mx-auto my-[20px] gap-[20px]">
        <Carousel />
        <div className="font-bold text-lg"><h2>About Us:</h2></div>
        <p>Graham Gardens is a family-owned company passionate about helping people grow their own gardens. We specialize in offering high-quality seeds and are dedicated to educating and supporting new gardeners every step of the way. Whether you&apos;re just starting out or looking to expand your green thumb, our mission is to provide you with the best seeds and the knowledge you need to cultivate a thriving garden. At Graham Gardens, we believe that anyone can experience the joy of growing their own plants with the right guidance and quality products.</p>
        <div className="font-bold text-lg"><h2>Contact Us:</h2></div>
        <div><span className="font-bold">Phone:</span> 888-888-8888</div>
        <div><span className="font-bold">Email:</span> contact@grahamgradens.com</div>
      </div>
           
    );
  }
  