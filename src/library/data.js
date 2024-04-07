const users = [
    {id:1, name:"Daniel"},
    {id:2, name:"Juwon"},
];

const posts = [
    {id:1, title:"Post 1", body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium suscipit fuga, optio sed doloribus quisquam officiis, architecto minima eaque dolor molestiae quaerat illo provident sunt ad harum rem. Est!", userId:1},
    {id:2, title:"Post 2", body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium suscipit fuga, optio sed doloribus quisquam officiis, architecto minima eaque dolor molestiae quaerat illo provident sunt ad harum rem. Est!", userId:2},
    {id:3, title:"Post 3", body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium suscipit fuga, optio sed doloribus quisquam officiis, architecto minima eaque dolor molestiae quaerat illo provident sunt ad harum rem. Est!", userId:3},
    {id:4, title:"Post 4", body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium suscipit fuga, optio sed doloribus quisquam officiis, architecto minima eaque dolor molestiae quaerat illo provident sunt ad harum rem. Est!", userId:4},
]

export const getPosts = () =>{
    return posts;
}

export const getPost = async (id) =>{
    const post = posts.find((post) => post.id === parseInt(id))
    return post
}
export const getUser = async () =>{
    return users.find((user) => user.id === parseInt(id))
}