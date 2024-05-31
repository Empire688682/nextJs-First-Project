import { postModels } from "../postModels/postModels.js";

const addPost = async (req,res)=>{
    let file_Name = `${req.file.filename}`
    try {
        const post = new postModels({
            id:req.body.id,
            title:req.body.title,
            text:req.body.text,
            category:req.body.category,
            author:req.body.author,                        
            imageSrc:file_Name,
        });

        console.log(file_Name)

        post.save()
        res.status(200).json({
            message:"Post added successfully",
            data:post
        })
        console.log("new post added successfully")
    } catch (error) {
        res.status(500).json({
            message:"Unable to add new post",
            data:post
        })
        console.log("Unable to add new post");
    }
};

export{ addPost };