import React from 'react'
import styles from './Author.module.css';
import { getUser } from '@/library/data';

//Fetct user with Api
//const getUsers = async (userId) =>{
 // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  //if(!response.ok){
  //  throw Error("An error Occured");
  //};
  //return response.json();
//}

const Author = async ({slug}) => {
  const userId = slug
  //Fetct user without Api
  const author = await getUser(userId)
  return (
    <div className={styles.container}>
       <div className={styles.author}>
                <h4>Author</h4>
                <p>{author.name}</p>
            </div>
    </div>
  )
}

export default Author
