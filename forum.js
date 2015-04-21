var fs = require("fs");
var express = require("express");
var sqlite3 = require("sqlite3");
var mustache = require("mustache");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var app = express();
var db = new sqlite3.Database("./forum.db");

app.use(bodyParser.urlencoded( {extended:false} ));
app.use(morgan ("dev") );
app.use(express.static("html") );

app.listen(3000, function() {
	console.log("Forum Server Initiated")
});

app.get("/", function (req,res) {
	var html = fs.readFileSync("./html/index.html", "utf8")
  res.send(html);
});

app.get("/list", function (req,res) {
	var html = fs.readFileSync("./html/list.html", "utf8");
	//var list = db.run("SELECT * FROM topics;");
  
  res.send(html);
});

app.get("/popTops", function (req,res) {
  var html = fs.readFileSync("./html/popTops.html", "utf8")

  res.send(html);
});

app.get("/createTop", function (req, res) {
  var html = fs.readFileSync("./html/createTop.html", "utf8")

  res.send(html);
});