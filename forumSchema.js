var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./forum.db');

db.run("CREATE TABLE topics 
  (
  
  topicID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name VARCHAR(255),
  Votes INT,
  Comments INT
  
  );"); 