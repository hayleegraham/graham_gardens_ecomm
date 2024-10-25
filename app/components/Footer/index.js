import "./Footer.scss";

export default function MainNav() {
    return(
        <div className="footer_cont">
            
            <ul className="nav_ul">
                <li><a className="text-base font-bold" href="/">Contact Us:</a></li>
                <li className="inline-flex"><span className="material-symbols-outlined">call</span>888-888-8888</li>
                <li className="inline-flex"><span className="material-symbols-outlined">mail</span>contact@grahamgradens.com</li>
            </ul>
            <ul className="nav_ul">
                <li><a className="text-base font-bold" href="/">Social Media:</a></li>
                <li><a className="text-base inline-flex" href="/">Facebook</a></li>
                <li><a className="text-base inline-flex" href="/">Instagram</a></li>
            </ul>
            <ul className="nav_ul">
                <li><a className="text-base font-bold" href="/">Links:</a></li>
                <li><a className="text-base" href="/">F.A.Q.</a></li>
                <li><a className="text-base" href="/">Return Policy</a></li>
            </ul>
        </div>
    )
}