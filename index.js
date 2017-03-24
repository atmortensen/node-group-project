const express = require('express');
const bodyParser = require('body-parser');
const cors = require('express');
const users = require('./api/users.js');
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get('/api/users', function(req, res){
  res.status(200).json(users.users)
});

app.delete('/api/users/:id', function(req, res){
  users.deleteUser(req.params.id);
  res.status(200).json(users.users)
});




app.listen(3000, console.log('welcome to port 3000'));
