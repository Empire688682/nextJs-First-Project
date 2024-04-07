import React from 'react'
import styles from './Author.module.css';

const getUsers = async (userId) =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if(!response.ok){
    throw Error("An error Occured");
  };
  return response.json();
}

const Author = async ({post}) => {
const {userId} = post;
  const author = await getUsers(userId);
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
