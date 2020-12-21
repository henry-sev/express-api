const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  console.log(typeof(req.body));
  res.send();
});

app.listen(3000, () => {
  console.log("running");
});

// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.post('/', function (req, res) { 
//     console.log(req.body.name);
//     res.end(req.body.name);
// });

// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });