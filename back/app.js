const express = require("express");
const app = express();
var path = require("path");
var fs = require("fs");
var obj = JSON.parse(fs.readFileSync("./phones.json", "utf8"));
const port = 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var dir = path.join(__dirname, "public");
app.use(express.static(dir));

app.get("/phones", (req, res) => {
  setTimeout(function () {
    res.send(obj);  
  }, 2000);
});


app.listen(port, () => {
  console.log("API app listening on port " + port);
});
