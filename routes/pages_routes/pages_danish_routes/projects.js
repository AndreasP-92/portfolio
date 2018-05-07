const db = require('../../../config/sql.js').connect_main();
module.exports = function (server){
    server.get('/projekter',function (req, res) {

        let get_all_projects = `SELECT * FROM tb_projects ORDER BY project_id DESC`
        db.query(get_all_projects, function(err, projectData){
            // console.log(projectData)
            // res.send(projectData)
            res.render('pages/danish/projekter.ejs',{
                projectData : projectData
            })
        })
    }
);
}