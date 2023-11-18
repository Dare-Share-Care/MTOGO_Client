const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can set the port number here

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});