import multer from "multer";
import express from 'express';
import {addPost} from "../postController/postController.js";

export const postRoute = express.Router();

//storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb) =>{
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({storage:storage});

postRoute.post("/add", upload.single("imageSrc"), addPost );







