"use client";
import NavLink from "./navLink/NavLink";
import styles from './links.module.css';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
    {
        Title: "Home",
        path: "/"
    },
    {
        Title: "About",
        path: "/about"
    },
    {
        Title: "Contact",
        path: "/contact"
    },
    {
        Title: "Blog",
        path: "/blog"
    },
];

const Links = () => {
    const [session, setSession] = useState(true); 
    const [admin, setAdmin] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.link}>
            {links.map(link => (
                <NavLink key={link.Title} item={link}/>
            ))}
        </div>
        <Image className={styles.menuOpen} src="/menu.png" width={30} height={30} alt="" onClick={()=>setMenuOpen((prev) => (!prev))}/>
        {
            menuOpen && (
                <div className={styles.menuLink}>
                    {
                        links.map((link) =>(
                            <NavLink item={link} key={link.Title}/>
                        ))
                    }
                </div>
            )
        }
        </div>
    );
};

export default Links;
