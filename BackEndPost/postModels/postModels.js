import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    id:{type:Number, required:true},
    title:{type:String, required:true},
    text:{type:String, required:true},
    category:{type:String, required:true},
    author:{type:String, required:true},                        
    imageSrc:{type:String, required:true}                       
});

export const postModels = mongoose.models.post || mongoose.model("post", postSchema);


