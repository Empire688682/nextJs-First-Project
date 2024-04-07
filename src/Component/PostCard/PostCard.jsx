import React from 'react'
import styles from './PostCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topCard}>
        <div className={styles.imageCon}>
          <Image
            src='https://cdn.pixabay.com/photo/2017/10/30/15/51/violin-2902804_1280.jpg'
            fill
            alt=''
            className={styles.image}
            />
        </div>
          <p className={styles.date}>01-01-2024</p>
      </div>
      <div className={styles.bottomCard}>
        <h3 className={styles.title}>{post.title}</h3>
        <p>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard
