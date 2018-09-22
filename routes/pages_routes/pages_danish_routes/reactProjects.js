const db = require('../../../config/sql.js').connect_main();

module.exports = function (server){

    var categoryCheck = ""


    server.get('/projekter/react',function (req, res) {
        var categoryCheck = "reactTrue"
        
        let get_all_projects = `
            SELECT
                * 
            FROM 
                tb_react_projects_dk
            ORDER BY 
                react_projects_dk_id DESC`
        db.query(get_all_projects, function(err, reactProjectData){
            // res.send(projectData)
            res.render('pages/danish/projekter.ejs',{
                reactProjectData : reactProjectData,
                categoryCheck : categoryCheck
            })
        })
    }
);
}