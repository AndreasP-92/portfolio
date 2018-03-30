const   express     = require('express'),
        path        = require('path'),
        server      = express(),
        bodyParser  = require('body-parser'),
        config      = require('./config/aName');
        nodeMailer  = require('nodemailer')

// PORT -----------------------

// var url     = "http://localhost:",
    // port    = 1337,
var url     = "mrcaptain.info",
    port    = 80,
    name    = "Portfolio"

// ENGINE --------------------------

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

// GETTING FORM DATA VIA BODY PARSER 
    
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    
    require('./routes/index')(server);

// SITE NOT FOUND ----------------------

    // server.use(function(req,res){
    //     res.render('pages/404.html');
    // });

//************************************************************************** EMAIL *****************************************************

// RENDER ---------------------------

server.get('/kontakt', function(req,res){
    res.render('pages/kontakt.html')
})

// EMAIL FUNCTION --------------------------

server.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.office365.com', // Office 365 server
        port: 587,     // secure SMTP
        secure: false,
        auth: {
            user: config.emailUser, // Insert mail user into a config file using module.exports
            pass: config.emailPassword // Insert mail password into a config file using module.exports
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        from: '"www.mrcaptain.info" <Andreas@mrcaptain.info>', // sender address
        to: `<andreas@mrcaptain.info>`, // reciver
        subject: req.body.subject, // Subject line
        html:`<h3>Fra</h3>` + req.body.from + `<br>` + `<h3>Besked</h3>` + req.body.message, // plain text bodyy
    };
    let dato = new Date()
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(dato + '<br>' + error);
        }
        console.log(dato +'<br>' + 'Message %s sent: %s' + '<br>', info.messageId, info.response);
            res.render('pages/forside');
        });
    });

// ---------------------------------------------------------------------------------------------------------------------------------

// SERVER LISTEN

server.listen(port,function(){
    console.log('Enter the world at: ' + url + port, '\n' + 'server name : ' + name)
})