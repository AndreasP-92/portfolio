const db = require('../../../config/sql.js').connect_main();

var categoryCheck = ""
module.exports = function (server){
    server.get('/projects/ejs',function (req, res) {    
        categoryCheck = "ejsTrue"

        var sql_get_all_projects = `
            SELECT
            *
            FROM
            tb_projects_en
            ORDER BY
            project_en_id DESC
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