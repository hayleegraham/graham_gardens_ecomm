import styles from "./MainNav.module.css";

export default function MainNav() {
    return(
        <div>
            <ul className={styles.ulStyle}>
                <li className={styles.liStyle}><a href="/" className={styles.aStyle}>Home</a></li>
                <li className={styles.liStyle}><a href="/carousel" className={styles.aStyle}>Carousel</a></li>
            </ul>
        </div>
    )
}