const db        = require('../../../.././config/sql').connect_culturalCenter();

module.exports = function (server){

    server.get('/culturalcenter/nyheder',function(req,res){
        sql = `
        SELECT
            *
        FROM
            tb_news
        ORDER BY
        news_id DESC
        `
        db.query(sql,function(err,data){
            if(err){
                console.log(err)
            }else{
                res.render('pages/culturalcenter/pages/site/nyheder.ejs',{
                    news : data
                });
            }
        })
    });
}

