module.exports = function (server){


    server.get('/culturalcenter/kontakt',function(req,res){
        res.render('pages/culturalcenter/pages/site/kontakt.ejs')
    });

}

