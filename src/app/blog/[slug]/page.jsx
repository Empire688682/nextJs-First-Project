"use client"
import Image from 'next/image'
import styles from './SinglePage.module.css'
import Author from '@/Component/authorSection/Author';
import { Suspense } from 'react';

const getPost = async (slug) =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache:"no-store"});
  if(!response.ok){
    throw Error("An error Occured");
  };
  return response.json();
}

// eslint-disable-next-line @next/next/no-async-client-component
const SinglePost =async  ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);
  console.log(post);
  const date = new Date().toLocaleTimeString('en-US', { hour12: false });
  return (
    <div className={styles.container}>
      <div className={styles.imageCon}>
        <Image
         src='https://cdn.pixabay.com/photo/2017/10/30/15/51/violin-2902804_1280.jpg' alt='' 
         fill
         className={styles.image} 
         />
      </div>
      <div className={styles.textCon}>
        <h1>{post.id}. {post.title}</h1>
        <div className={styles.titleSub}>
            <Image src='https://cdn.pixabay.com/photo/2017/10/30/15/51/violin-2902804_1280.jpg' alt='' width={60}  height={60} style={{border:"2px solid white", borderRadius:"50%"}}/>
            <Suspense fallback={<p>Loading....</p>}>
             <Author post={post}/>
            </Suspense>
            <div className={styles.publish}>
                <h4>Publish</h4>
                <p suppressHydrationWarning>{date}</p>
            </div>
        </div>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default SinglePost
