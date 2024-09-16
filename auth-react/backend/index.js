import express from 'express';


import dotenv from "dotenv";
dotenv.config()

import dotenv from 'dotenv';
import  {connectDB} from "./DB/connectDB.js";


dotenv.config();


const app = express();
app.get("/", (req, res) => {res.send("Server is Highly Runyjkning!");});



//routes
app.listen(3000, () =>

  console.log('Server is Listening'),
  
); 

app.listen(3000, () =>{

    connectDB();

  console.log('Server is Listening');
}); 

