const handler = require('serve-handler');
const http = require('http');
const express = require('express');
const app = express();

app.get('*',(req,res)=>{
    res.sendFile(`${__dirname}/build/index.html`)
})
 
const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options

  module.exports = async (request, response) => {
    await handler(request, response,{
        'public':'./build'
    });
    
  };
  return handler(request, response);
})
 
server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});