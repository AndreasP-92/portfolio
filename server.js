const   express     = require('express'),
        path        = require('path'),
        server      = express(),
        bodyParser  = require('body-parser');

// var url     = "http://localhost:",
var url     = "mrcaptain.info",
    port    = 8080,
    name    = "Portfolio"

    server.engine('html', require('ejs').renderFile);
    server.set('view engine', 'html');

    // server.set(
    //     'view engine', 
    //     'html')
    server.set('views', path.join(__dirname, '/public_html/views'));
    
    server.use(express.static(__dirname + '/public'));

    server.use(express.static('public_html'));
    server.use('/static', express.static('public_html'));
    server.use(express.static(path.join(__dirname + 'public_html')));
    
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    
    require('./routes/index')(server);

    
server.listen(port,function(){
    console.log('Enter the world at: ' + url + port, '\n' + 'server name : ' + name)
})