const express = require('express')
const app = express();
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./public/phones.json', 'utf8'));
const port = 3000

app.get('/phones', (req, res) => {
  res.send(obj)
});

app.listen(3000, () => {
  console.log('API app listening on port ' + port)
});