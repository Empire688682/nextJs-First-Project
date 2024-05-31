import Links from "@/Component/navbar/links/Links"; 
import styles from './navbar.module.css'
import Link from "next/link";
const Navbar = () => {
  return( <div className={styles.container}>
    <div className={styles.content}>
      <h1><Link href="/">Jay.</Link></h1>
      <Links/>
    </div>
  </div>);
};

export default Navbar
