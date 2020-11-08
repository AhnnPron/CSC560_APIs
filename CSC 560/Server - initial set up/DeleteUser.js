var express = require('express');
var app = express();
var fs = require("fs");

var id = 3;

app.delete('/DeleteUser', function (req, res){
  fs.readFile("users.json", 'utf8', function (err, data){
    data = JSON.parse(data);
    delete data["user" + 3]; //We are assuming we are going to delete the user with id of 3
    console.log(data);
    res.end(JSON.stringify(data));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example applistening at http://%s:%s", host, port)
})


//http://127.0.0.1:8081/DeleteUser
