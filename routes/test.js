const fs = require('fs');

fs.writeFile('./access.log', "ff", (err) => {
  if (err) throw err;
  console.log('写入成功');
});