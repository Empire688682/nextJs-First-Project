export const posts = [
    {
        id:1,
        title:"Post 1",
        body:"suscipit recusandae consequuntur expedita et cum",
        name:"Daniel"
    },
    {
        id:2,
        title:"Post 2",
        body:"reprehenderit molestiae ut ut quas totam",
        name:"Juwon"
    },
    {
        id:3,
        title:"Post 3",
        body:"nostrum rerum est autem sunt rem eveniet architecto",
        name:"Juwon"
    },
    {
        id:4,
        title:"Post 4",
        body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam",
        name:"Empire"
    },
];

export const getPosts = async () =>{
    return posts;
}

export const users = [
    {
        id:1,
        name:"Daniel"
    },
    {
        id:2,
        name:"Juwon"
    },
    {
        id:3,
        name:"Rosie"
    },
    {
        id:4,
        name:"Empire"
    }
];

export const getPost = async (id) =>{
  const post = posts.find((post) => post.id === parseInt(id));
  return post
}

export const getUser = async (id) =>{
    const user = posts.find((user) => user.id === parseInt(id));
    return user;
}