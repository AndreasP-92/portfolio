const db        = require('../../../.././config/sql').connect_culturalCenter();

module.exports = function (server) {
    console.log('admin læst')

    server.get('/culturalcenter/admin', async function(req,res){

            res.render('pages/culturalcenter/pages/admin/admin.ejs',{

            })

    })
}
