const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: any, res:any) => {
  res.send('Welcome to Cricket Tournament System!');
});

app.get('/ping', (req: any, res:any) => {
    res.send('CTS System is live!');
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});