module.exports = function (server) {

    // **************************************************** DANISH ROUTES ************************************************************

    server.get('/',
        function (req, res) {
            res.render('pages/danish/index.ejs')
        }
    );
    server.get('/forside',
        function (req, res) {
            res.render('pages/danish/forside.ejs')
        }
    );
    server.get('/egenskaber',
        function (req, res) {
            res.render('pages/danish/egenskaber.ejs')
        }
    );
    server.get('/kontakt',
        function (req, res) {
            res.render('pages/danish/kontakt.ejs')
        }
    );


    // ************************************************************ ENGLISH ROUTES *****************************************************

    server.get('/en-index',
        function (req, res) {
            res.render('pages/english/main.ejs')
        }
    );
    server.get('/main',
        function (req, res) {
            res.render('pages/english/main_02.ejs')
        }
    );
    server.get('/skills',
        function (req, res) {
            res.render('pages/english/skills.ejs')
        }
    );

    server.get('/contact',
        function (req, res) {
            res.render('pages/english/contact.ejs')
        }
    );
}