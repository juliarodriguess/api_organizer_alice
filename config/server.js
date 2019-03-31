const port = 4000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())
server.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    next();
  });
  

server.listen(process.env.PORT || port, function() {
    console.log('server running on port 4000')
})

server.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = server