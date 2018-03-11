module.exports = function (server){
    server.get('/',
    function(req,res){
        // console.log('side læst')
            res.render('pages/index')
        }
    );
    server.get('/forside',
    function(req,res){
        console.log('forside læst')
            res.render('pages/forside')
        }
    );
    server.get('/egenskaber',
    function(req,res){
        console.log('egenskaber læst')
            res.render('pages/egenskaber')
        }
    );
    server.get('/kontakt',
    function(req,res){
        console.log('projekter læst')
            res.render('pages/kontakt')
        }
    );
    server.get('/projekter',
    function(req,res){
        console.log('projekter læst')
            res.render('pages/projekter')
        }
    );
}