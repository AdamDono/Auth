import express from 'express';

const app = express();
app.get("/", (req, res) => {res.send("Hello, worldertyuj!");});

app.listen(3000, () =>
  console.log('Example app listjening on port 3000!'),
);