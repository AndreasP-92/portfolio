module.exports = (server) => {

    server.get('/slipseknuden',
    function(req,res){
        console.log('slipseknuden læst')
            res.render('pages/slipseknuden/index.ejs')
        }
    );
}