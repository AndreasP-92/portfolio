module.exports = function (server){

    //********************************************************************** HI-FI ********************************************************

    server.get('/hifi',
    function(req,res){
        console.log('hifi')
            res.render('pages/drop_down/hifi/index')
        }
    );
    server.get('/hifi/products',
    function(req,res){
        console.log('hifi')
            res.render('pages/drop_down/hifi/produkt')
        }
    );

}