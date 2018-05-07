const db = require('../../../config/sql.js').connect_main();

module.exports = function (server){

    server.get('/admin/upload_project', function(req,res){
// REQUIRE LOGIN ==============================================
        var user = req.session.user;
		var userId = req.session.userId;
		console.log(`Debug: Session.userID is ${userId}`);

        if (userId == null) {
			res.redirect("/login");
			return;
		}

        res.render('pages/admin/admin_upload_project.ejs',{

        })
    });

// ********************************************************** UPLOAD DANISH PROJECT ***********************************************

    server.post('/json/project/create/project/dk',function(req,res){
// GET URL PARAMS==========================================================
        let project_link        = req.body.project_link,
            project_title       = req.body.project_title,
            project_image       = req.body.project_image,
            project_date        = req.body.project_date,
            project_text_01     = req.body.project_text_01,
            project_text_02     = req.body.project_text_02,
            project_text_03     = req.body.project_text_03,
            project_show        = req.body.project_show;
            console.log('get url', project_link)

        let sql_insert_project_dk = `
           INSERT INTO 
                tb_projects(
                    project_link,
                    project_title,
                    project_image,
                    project_date,
                    project_text_01,
                    project_text_02,
                    project_text_03
                    
                )
            VALUES(
                '${project_link}',
                '${project_title}',
                '${project_image}',
                '${project_date}',
                '${project_text_01}',
                '${project_text_02}',
                '${project_text_03}'
            )` 
console.log('*57 SQL  ==================================== \n', sql_insert_project_dk, '\n ====================================')
// DATABASE CALL ===================================================================

            db.execute(sql_insert_project_dk, function (err, rows) {
                console.log('rows = ', rows)
                if (err){ 
                    res.send(err)
                } else {
                    res.json(200, rows);
                }
            })
        })

// ********************************************************** UPLOAD ENGLISH PROJECT ***********************************************

            server.post('/json/project/create/project/en',function(req,res){
// GET URL PARAMS==========================================================
        let project_link_en        = req.body.project_link_en,
            project_title_en       = req.body.project_title_en,
            project_image_en       = req.body.project_image_en,
            project_date_en        = req.body.project_date_en,
            project_text_01_en     = req.body.project_text_01_en,
            project_text_02_en     = req.body.project_text_02_en,
            project_text_03_en     = req.body.project_text_03_en,
            project_show_en        = req.body.project_show_en;
            console.log('get url', project_link_en)

        let sql_insert_project_en = `
           INSERT INTO 
                tb_projects_en(
                    project_en_link,
                    project_en_title,
                    project_en_image,
                    project_en_date,
                    project_en_text_01,
                    project_en_text_02,
                    project_en_text_03
                    
                )
            VALUES(
                '${project_link_en}',
                '${project_title_en}',
                '${project_image_en}',
                '${project_date_en}',
                '${project_text_01_en}',
                '${project_text_02_en}',
                '${project_text_03_en}'
            )` 
// console.log('SQL * 104 ==================================== \n', sql_insert_project_en, '\n ===================================')
// DATABASE CALL ===================================================================

            db.execute(sql_insert_project_en, function (err, rows) {
                console.log('rows = ', rows)
                if (err){ 
                    res.send(err)
                } else {
                    res.json(200, rows);
                }
            });    
        })
}