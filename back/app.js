const express = require('express')
const app = express();
var path = require('path');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./public/phones.json', 'utf8'));
const port = 3001

var dir = path.join(__dirname, 'public');
app.use(express.static(dir));

app.get('/phones', (req, res) => {
  res.send(obj)
});

app.listen(port, () => {
  console.log('API app listening on port ' + port)
});