import Image from "next/image";
import Link from "next/link";
import styles from './homepage.module.css'

const Home = () =>{
    return <div className={styles.container}>
        <div className={styles.colum1}>
            <h1>Creative Thoughts Agency.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit in enim quae animi ipsum placeat esse nobis eveniet? Laborum debitis quos, tempora aspernatur unde omnis a voluptas deleniti fugiat maiores!</p>
            <div className={styles.buttons}>
                <button className={styles.button1}>Learn more</button>
                <Link href="/contact"><button className={styles.button}>Contact</button></Link>
            </div>
            <div className={styles.brands}>
            <Image src='/brands.png' alt="Picture" fill/>
            </div>
        </div>
        <div className={styles.colum2}>
            <Image src='/hero.gif' alt="Picture" fill/>
        </div>
    </div>;
};

export default Home
