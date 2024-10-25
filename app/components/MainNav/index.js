import "./MainNav.scss";

export default function MainNav() {
  return (
    <div className="header_cont">
      <div className="offers text-base font-bold text-center">
        FREE SHIPPING & 10% OFF FIRST ORDER FOR SUBSCRIBERS
      </div>
      <div className="flex flex-row justify-between nav_cont items-center px-[50px]">
        <div className="flex flex-row items-center gap-[20px] w-[300px]">
          <div className="circle">
            <img src="/flower_growing.gif"></img>
          </div>
          <h1 className="text-[25px] font-bold">
            Graham Gardens
          </h1>
        </div>
        <ul className="flex gap-[30px]">
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
        <div className="flex flex-row w-[300px] justify-end gap-[20px]">
          <a className="text-base " href="/">
            LOG IN / SIGN UP
          </a>
          <img src="/cart.png" className="w-[25px] h-[25px] cursor-pointer"></img>
        </div>
      </div>
    </div>
  );
}
