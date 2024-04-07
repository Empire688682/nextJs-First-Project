"use client"
import PostCard from '@/Component/PostCard/PostCard'
import React from 'react'
import styles from './blog.module.css'

const getData = async () =>{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if(!response.ok){
    throw Error("An error occured")
  };
  return response.json();
};

const page  = async () => {
 const posts = await getData();
  return (
    <div className={styles.container}>
            {
              posts.map((post) =>{
                return <PostCard key={post.id} post={post}/>
              })
            }
    </div>
  )
}

export default page
