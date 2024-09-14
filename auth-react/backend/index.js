import express from 'express';
import dotenv from "dotenv";
dotenv.config()
const app = express();
app.get("/", (req, res) => {res.send("Server is Highly Running!");});

app.listen(3000, () =>

  console.log('Server is Listening'),
  
); 
