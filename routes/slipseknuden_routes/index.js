module.exports = (server) => {

    server.get('/slipseknuden',
    function(req,res){
        console.log('slipseknuden læst')
            res.render('/static/resources/pages/drop_down/slipseknuden/views/pages/index.ejs')
        }
    );
}