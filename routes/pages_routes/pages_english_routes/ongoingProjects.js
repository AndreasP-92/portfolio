const db = require('../../../config/sql.js').connect_main();

var categoryCheck = ""
module.exports = function (server){

    // SHOW ONGOING PROJECTS =================

    server.get('/projects/ongoing',function (req, res) {    
        categoryCheck = "ongoingTrue"

        var sql_get_all_projects = `
            SELECT
            *
            FROM
            tb_projects_ongoing_en
            ORDER BY
            ongoing_id DESC
        `;
        db.query(sql_get_all_projects, function (req,projectData){
            // console.log(projectData)
                res.render('pages/english/projects.ejs',{
                    projectData : projectData,
                    categoryCheck : categoryCheck
                })
            })
        });
}