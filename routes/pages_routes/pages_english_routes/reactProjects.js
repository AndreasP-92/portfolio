const db = require('../../../config/sql.js').connect_main();

var categoryCheck = ""
module.exports = function (server){

// SHOW REACT PROJECTS =================

    server.get('/projects/react',function (req, res) {    
        categoryCheck = "reactTrue"

        var sql_get_all_projects = `
            SELECT
            *
            FROM
            tb_react_projects_en
            ORDER BY
            react_projects_en_id DESC
        `;
        db.query(sql_get_all_projects, function(req,reactProjectData){
            // console.log(reactProjectData)
            res.render("pages/english/projects.ejs",{
                reactProjectData : reactProjectData,
                categoryCheck : categoryCheck
            })
        })
    });
}