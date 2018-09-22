const db        = require('../../../.././config/sql').connect_culturalCenter();
const getAll    = require('../../services/getAll');

module.exports = function (server) {

    server.get('/culturalcenter', async function(req,res){
        try{
            const main_galleryData  = await getAll.getAlltb_maingallery();
            const arrangements      = await getAll.getAlltb_arrangements_DESC_limit_3();
            res.render('pages/culturalcenter/pages/site/index.ejs',{
                gallery         : main_galleryData,
                arrangements    : arrangements
            })
        } catch (e){
            console.log(e)
        }
    })

}