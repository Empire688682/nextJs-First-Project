import express from 'express';
import cors from 'cors';
import { ConnectToDb } from './dbConnection/ConnectToDb.js';

//app Config
const app = express()
const port = '6886';

//app router
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Api running successfully")
})

//db connection
ConnectToDb()

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})



