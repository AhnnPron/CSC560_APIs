var express = require('express');
var app = express();
var fs = require('fs');

app.get('/GetAllUsers', function (req, res) //the function takes a resquest and sends a response
{
  fs.readFile('users.json', 'utf8', function (err, data){
    console.log(data);
    res.end(data);
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

//http://127.0.0.1:8081/GetAllUsers
