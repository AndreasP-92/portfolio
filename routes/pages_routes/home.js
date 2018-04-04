module.exports = function (server) {

    // **************************************************** DANISH ROUTES ************************************************************

    server.get('/',
        function (req, res) {
            // console.log('side læst')
            res.render('pages/index.ejs')
        }
    );
    server.get('/forside',
        function (req, res) {
            console.log('forside læst')
            res.render('pages/forside.ejs')
        }
    );
    server.get('/egenskaber',
        function (req, res) {
            console.log('egenskaber læst')
            res.render('pages/egenskaber.ejs')
        }
    );
    server.get('/kontakt',
        function (req, res) {
            res.render('pages/kontakt.ejs')
        }
    );
    server.get('/projekter',
        function (req, res) {
            res.render('pages/projekter.ejs')
        }
    );

    // ************************************************************ ENGLISH ROUTES *****************************************************

    server.get('/en-index',
        function (req, res) {
            console.log('projekter læst')
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
    server.get('/projects',
        function (req, res) {
            res.render('pages/english/projects.ejs')
        }
    );
    server.get('/contact',
        function (req, res) {
            res.render('pages/english/contact.ejs')
        }
    );
}