import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
    return(
        <div className="footer_cont flex sm:flex-row flex-col justify-center py-[10px] xl:gap-[150px] sm:gap-[50px] gap-[20px] sm:h-[108px] h-[310px] content-center flex-wrap">
            <ul className="lg:w-[300px] w-[210px]">
                <li><Link className="text-base font-bold" href="/contact">Contact Us:</Link></li>
                <li className="text-base flex pt-[5px]"><span className="material-symbols-outlined">call</span>888-888-8888</li>
                <li className="text-base flex pt-[5px]"><span className="material-symbols-outlined">mail</span>contact@grahamgardens.com</li>
            </ul>
            <ul>
                <li><a className="text-base font-bold" href="/">Social Media:</a></li>
                <li className="flex"><img src="/facebook.png" alt="facebook logo" className="h-[30px]"></img><p className="text-base pt-[4px]">Facebook</p></li>
                <li className="flex"><img src="/instagram.png" alt="instagram logo" className="h-[30px]"></img><p className="text-base pt-[4px]">Instagram</p></li>
            </ul>
            <ul className="lg:pl-[204px] md:pl-[105px] sm:pl-[20px]">
                <li className="text-base font-bold">Links:</li>
                <li className="pt-[5px]"><Link className="text-base" href="/faq">F.A.Q.</Link></li>
                <li className="pt-[5px]"><Link className="text-base" href="/return">Return Policy</Link></li>
            </ul>
        </div>
    )
}