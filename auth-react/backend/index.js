import express from 'express';
import dotenv from 'dotenv';
import  {connectDB} from "./DB/connectDB.js";


dotenv.config();

const app = express();
app.get("/", (req, res) => {res.send("Server is Highly Running!");});

app.listen(3000, () =>{

    connectDB();

  console.log('Server is Listening');
}); 
