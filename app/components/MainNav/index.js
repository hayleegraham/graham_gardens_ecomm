import "./MainNav.scss";

export default function MainNav() {
    return(
        <div className="header_cont">
            <div className="offers text-base font-bold text-center">
                FREE SHIPPING & 10% OFF FIRST ORDER FOR SUBSCRIBERS
            </div>

            <ul className="nav_ul">
                <div className="inline-flex">
                    <div className="circle">
                        <img src="/flower_growing.gif"></img>
                    </div>
                    <h1 className="text-[25px] font-bold absolute left-[115px] top-[53px]">Graham Gardens</h1>
                </div>
                <li><a className="text-base" href="/">SHOP SEEDS</a></li>
                <li><a className="text-base" href="/carousel">CONTACT US</a></li>
                <li><a className="text-base" href="/carousel">SUBSCRIBE</a></li>
                <li><a className="text-base" href="/carousel">GARDENING GUIDE</a></li>

                <div className="inline-flex">
                    <a className="text-base absolute 2xl:left-[1305px] top-[60px]" href="/">LOG IN / SIGN UP</a>
                    <img src="/cart.png" className="w-[25px] absolute 2xl:left-[1457px] top-[58px] cursor-pointer"></img>
                </div>
            </ul>
        </div>
    )
}