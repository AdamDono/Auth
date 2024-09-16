import express from 'express';
import dotenv from "dotenv";
dotenv.config()
const app = express();
app.get("/", (req, res) => {res.send("Server is Highly Runyjkning!");});


//routes
app.listen(3000, () =>

  console.log('Server is Listening'),
  
); 
