const express = require('express');
const app = express();
const router = require('./routes/access')
const fs = require('fs');
const port = 3000;



app.use(express.json());

app.use('/', router);

app.get('/', (req, res) => {
  res.send([port]);
})

app.listen(port, () => {
  console.log('server is running');
});
