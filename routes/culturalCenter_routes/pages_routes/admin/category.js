const db        = require('../../../.././config/sql').connect_culturalCenter();
const getAll    = require('../../services/getAll')

module.exports = function (server) {
    server.get('/json/category/all', async function(req,res){
        try{
            const categoryData  = await getAll.getAlltb_category();
            res.send(categoryData)
        }catch(e){
            console.log(e)
        } 
    })
}
