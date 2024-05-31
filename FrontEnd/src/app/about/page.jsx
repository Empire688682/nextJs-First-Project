
import Image from "next/image";
import styles from './about.module.css'

const About = () =>{
    return <div className={styles.container}>
    <div className={styles.colum1}>
        <h1>About Agency</h1>
        <h2>We create digital ideas that are bigger, bolder, braver and better.</h2>
        <p>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We’re world’s Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
        <div className={styles.experienceCon}>
            <div className={styles.experience}>
                <h3>5K +</h3>
                <p>Year of experience</p>
            </div>
            <div className={styles.experience}>
                <h3>5K +</h3>
                <p>Year of experience</p>
            </div>
            <div className={styles.experience}>
                <h3>5K +</h3>
                <p>Year of experience</p>
            </div>
        </div>
    </div>
    <div className={styles.colum2}>
        <Image src='/about.png' alt="Picture" fill/>
    </div>
</div>;
}

export default About