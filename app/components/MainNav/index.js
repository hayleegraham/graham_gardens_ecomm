import "./MainNav.scss";

export default function MainNav() {
  return (
    <div className="header_cont">
      <div className="offers text-base font-bold text-center lg:block hidden">
        FREE SHIPPING & 10% OFF FIRST ORDER FOR SUBSCRIBERS
      </div>
      <div className="flex flex-row xl:justify-between justify-center nav_cont items-center px-[50px] md:h-[74px] h-[174px]">
        <div className="xl:flex flex-row items-center gap-[20px] w-[300px] hidden">
          <div className="circle">
            <img src="/flower_growing.gif"></img>
          </div>
          <h1 className="text-[25px] font-bold">
            Graham Gardens
          </h1>
        </div>
        <ul className="flex xl:gap-[30px] gap-[15px] flex-col md:flex-row mr-[50px] md:mr-0">
          <li>
            <a className="text-base" href="/">
              SHOP SEEDS 
            </a>
          </li>
          <li>
            <a className="text-base" href="/carousel">
              CONTACT US 
            </a>
          </li>
          <li>
            <a className="text-base" href="/carousel">
              SUBSCRIBE 
            </a>
          </li>
          <li>
            <a className="text-base" href="/carousel">
              GARDENING GUIDE 
            </a>
          </li>
        </ul>
        <div className="flex flex-row lg:w-[300px] sm:w-[100px] w-[40px] justify-end xl:gap-[20px] gap-[15px]">
            <img src="/person.png" className="w-[25px] h-[25px] cursor-pointer block lg:hidden"></img>
          <a className="text-base hidden lg:block" href="/">
            LOG IN / SIGN UP
          </a>
          <img src="/cart.png" className="w-[25px] h-[25px] cursor-pointer"></img>
        </div>
      </div>
    </div>
  );
}
