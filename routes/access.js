const express = require('express');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

router.get('/users', (req, res) => {
  getAccessLog(req);
  res.send();
});

router.get('/users/:id', (req, res) => {
  getAccessLog(req);
  res.send();
});

router.post('/users', (req, res) => {
  getAccessLog(req);
  res.send();
});

router.post('/users/:id', (req, res) => {
  getAccessLog(req);
  res.send();
})

function formatDate() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let formatDate = `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`;
  return formatDate;
}

function getAccessLog(req) {
  let date = formatDate();
  let method = req.method;
  let protocol = req.protocol;
  let hostname = req.hostname;
  let path = req.path;
  let userId = req.params.id;
  let query = req.query;
  let body = req.body;

  let url = protocol + "://" + hostname + path;
  let params = userId ? "userId:" + userId : null;
  let queryStr = JSON.stringify(query) === "{}" ? null : JSON.stringify(query);
  let bodyStr = JSON.stringify(body) === "{}" ? null : JSON.stringify(body);

  let accessLog = `[${date}] [${method}] URL:${url}, params: ${params}, query: ${queryStr}, body: ${bodyStr}`;
  console.log(accessLog);
  fs.appendFile('./routes/access.log',  accessLog + '\n', (err) => {
    if (err) throw err;
    console.log('新的请求已成功写入');
  });
}

module.exports = router;