const express = require('express')
const bodyParser = require('body-parser')
const cors = require('express')

const app = express();



app.get('/api/users', function(req, res){
  res.status(300).send(data.indexOfData)
})

app.delete('/api/users', function(req, res){
  users.remove({})
})


var port = 3000

app.listen(300, console.log('listening on port ' + port))
