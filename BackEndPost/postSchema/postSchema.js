import mongoose from "mongoose";

export const postSchema = mongoose.Schema({
    id:{type:Number, require:true},
    title:{type:String, require:true},
    text:{type:String, require:true},
    category:{type:String, require:true},
    author:{type:String, require:true},                        
    imageSrc:{type:String, require:true}                       
})

