
import Image from "next/image";
import styles from './contact.module.css'
//const HydrateTestingNoSsr = dynamic(()=> import("@/Component/hydrateTesting/page"), {ssr:false})//
const Contact = () =>{
    return <div className={styles.container}>
    <div className={styles.colum1}>
        <Image src='/contact.png' alt="Picture" fill/>
    </div>
    <div className={styles.colum2}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" required/>
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number (Optional)" required/>
          <textarea
            required
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
    </div>
</div>;
}

export default Contact