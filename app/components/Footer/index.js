import "./Footer.scss";

export default function MainNav() {
    return(
        <div className="footer_cont flex flex-row justify-center py-[10px] gap-[150px]">
            
            <ul className="w-[300px]">
                <li><a className="text-base font-bold" href="/">Contact Us:</a></li>
                <li className="text-base flex pt-[5px]"><span className="material-symbols-outlined">call</span>888-888-8888</li>
                <li className="text-base flex pt-[5px]"><span className="material-symbols-outlined">mail</span>contact@grahamgradens.com</li>
            </ul>
            <ul>
                <li><a className="text-base font-bold" href="/">Social Media:</a></li>
                <li className="flex"><img src="/facebook.png" className="h-[30px]"></img><a className="text-base pt-[4px]" href="/">Facebook</a></li>
                <li className="flex"><img src="/instagram.png" className="h-[30px]"></img><a className="text-base pt-[4px]" href="/">Instagram</a></li>
            </ul>
            <ul className="pl-[204px]">
                <li><a className="text-base font-bold" href="/">Links:</a></li>
                <li className="pt-[5px]"><a className="text-base" href="/">F.A.Q.</a></li>
                <li className="pt-[5px]"><a className="text-base" href="/">Return Policy</a></li>
            </ul>
        </div>
    )
}