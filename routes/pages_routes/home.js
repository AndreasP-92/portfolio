module.exports = function (server){
    server.get('/',
    function(req,res){
        // console.log('side læst')
            res.render('pages/index')
        }
    );
    server.get('/forside',
    function(req,res){
        console.log('egenskaber læst')
            res.render('pages/forside')
        }
    );
    server.get('/egenskaber',
    function(req,res){
        console.log('egenskaber læst')
            res.render('pages/egenskaber')
        }
    );
}