// const posts = [
//     {
//         id:1,
//         title:"Post 1",
//         body:"suscipit recusandae consequuntur expedita et cum",
//         userId:1
//     },
//     {
//         id:2,
//         title:"Post 2",
//         body:"reprehenderit molestiae ut ut quas totam",
//         userId:2
//     },
//     {
//         id:3,
//         title:"Post 3",
//         body:"nostrum rerum est autem sunt rem eveniet architecto",
//         userId:3
//     },
//     {
//         id:4,
//         title:"Post 4",
//         body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam",
//         userId:3
//     },
// ];


// export const users = [
//     {
//         id:1,
//         name:"Daniel"
//     },
//     {
//         id:2,
//         name:"Juwon"
//     },
//     {
//         id:3,
//         name:"Rosie"
//     },
//     {
//         id:4,
//         name:"Empire"
//     }
// ];

import ConnectToDb from "./ConnectToDb";
import { Post, User } from "./models";

export const getPosts = async () =>{
    try {
        await ConnectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error("Posts error:", error);
        throw error;
    }
}

export const getPost = async (slug) =>{
  try {
    await ConnectToDb();
    const post = await Post.findOne({slug:slug});
    return post;
  } catch (error) {
    console.error("Post error:", error);
    throw error;
  }
}

export const getUser = async (id) =>{
    try {
        await ConnectToDb();
        const user = User.findById(id);
        return user;
    } catch (error) {
    console.error("User error:", error);
    throw error;
    }
}