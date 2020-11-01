var express = require('express');
var app = express();
var fs = require('fs');

app.get('/:id', function (req, res){
  fs.readFile('users.json', 'utf8', function (err, data){
    var users = JSON.parse(data);
    var user = users["user" + req.params.id] // Ex: user 1 --> http://1270.0.1.:8081/1
    console.log(user);
    res.end(JSON.stringify(user));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example applistening at http://%s:%s", host, port)
})

//http://127.0.0.1:8081/3
