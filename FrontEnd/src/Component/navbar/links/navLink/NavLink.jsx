 "use client"
import Link from "next/link"
import styles from './navLink.module.css'
import { usePathname } from "next/navigation"

const NavLink = ( { item } ) => {
  const pathName = usePathname()
  return (
    <div className={styles.container}>
     <div className="all-link">
      <Link className={`${styles.link} ${pathName === item.path && styles.active}`} href={item.path}>{item.Title}</Link>
     </div>
    </div>
  )
}

export default NavLink
