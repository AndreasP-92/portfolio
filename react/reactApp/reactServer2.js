const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(express.static(__dirname + '/build'));

// app.get('*',(req,res)=>{
//     res.sendFile(`${__dirname}/build/index.html`)
// })

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : 'false'}));

const port = process.env.PORT || 9000

app.listen(port, ()=>{
    console.log('server listening on port :', port)
})