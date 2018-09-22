const db            = require('../../../.././config/sql').connect_culturalCenter();
const fileUpload    = require('express-fileupload');

module.exports = function (server) {
    server.get('/culturalcenter/admin/nyheder',function(req,res){
        sql = `
        SELECT
            *
        FROM
            tb_news
        `
        db.query(sql,function(err,data){
            if(err){
                console.log(err)
            }else{
                res.render('pages/culturalcenter/pages/admin/admin_create_news.ejs',{
                    news : data
                });
            }
        })
    });
// NEWS UPLOAD ===========================================================
        server.post('/json/arrangement/create/news',function(req,res, next){
            // GET URL PARAMS---------------------------------------
            let news_title      = req.body.news_title,
                news_date       = req.body.news_date,
                news_author     = req.body.news_author,
                news_text       = req.body.news_text;
                // console.log(arrangement_show)

            let sql = `
            INSERT INTO 
                tb_news(
                    news_id,
                    news_title,
                    news_img,
                    news_date,
                    news_author,
                    news_text
            )
            VALUES(
                '',
                '${news_title}',
                'missing_picture.jpeg',
                '${news_date}',
                '${news_author}',
                '${news_text}'
            )`
                    console.log('SQL ======== ', sql, '=============')
// DATABASE CALL --------------------------------------------
                db.execute(sql, function (err,rows){
                    console.log(rows)
                    if(err){
                        res.send(err)
                    }else{
                        res.redirect('/culturalcenter/admin/nyheder')
                    }
                })       
        })
// IMAGE UPLOAD =====================================================================
        server.post('/json/arrangement/create/news/upload_img/:id', function(req, res) {
            if (!req.files)
                return res.status(400).send('No files were uploaded.');
    // NAMING PARAMS ---------------------------------
            let sampleFile  = req.files.sampleFile,
                sampleId    = req.params.id;
            console.log('IMAGE NAME : ',sampleId)
    // FILE PATH ( SERVER SITE ) -----------------------
            sampleFile.mv(`public/resourcess/pages/cultural_center/media/news/${sampleFile.name}`, function(err) {
    // SQL CALL ------------------------------------
                sql_update_image = `
                UPDATE
                    tb_news
                SET
                    news_img        = '${sampleFile.name}'
                WHERE
                    news_id         = '${sampleId}'
                `
                console.log('SQL UPLOAD',sql_update_image)
                db.execute(sql_update_image, function(err, rows){
                        if (err)
                            return res.status(500).send(err);
                        res.redirect('/culturalcenter/admin/nyheder');
                    }) 
                });
            });
// DELETE NEWS =======================================================================
            server.post('/json/arrangement/create/news/delete_news/:id',function(req,res){
                let news_id = req.params.id
                sql=`
                DELETE FROM
                    tb_news
                WHERE
                    news_id = '${news_id}'
                `
                console.log('SQL ======== ', sql, '=============')
                
                db.execute(sql,function(err,data){
                    if(err){
                        console.log(err)
                    } else{
                        res.redirect('/culturalcenter/admin/nyheder')
                    }
                })
            })
}