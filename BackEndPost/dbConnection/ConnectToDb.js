import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

let isCollected = false;

export const ConnectToDb = async () =>{
  if(!isCollected){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB successfully");
    let isCollected = true
  }
  else{
    console.log("unable to connect to DB");;
  }
}

