const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;


app.use("/",require("../routes"))

app.get('/', (req: any, res:any) => {
  res.send('User MicroService');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});