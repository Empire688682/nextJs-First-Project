"use client";
import React from 'react'
import styles from './footer.module.css'
import Link from "next/link";

const footer = () => {
  return (
    <div className={styles.footer}>
      <h4><Link href="/">Jay.</Link></h4>
      <p onClick={()=> window.scroll(0,0)}>Jay creative thoughts agency © All rights reserved.</p>
    </div>
  )
}

export default footer
