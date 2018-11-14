const db            = require('../../../.././config/sql').connect_culturalCenter();
const fileUpload    = require('express-fileupload');
const getAll        = require('../../services/getAll');
const appPost       = require('../../services/post');

module.exports = function (server) {

// CREATE ARRANGEMENT ===============================
    server.get('/culturalcenter/admin/opret', async function(req,res){
        try{
            const adressData        = await getAll.getAlltb_adress();
            const buildingData      = await getAll.getalltb_building();
            const CategoryData      = await getAll.getAlltb_category();
            const arrangementData   = await getAll.getalltb_arrangements();
            res.render('pages/culturalcenter/pages/admin/admin_create_activity.ejs',{
                adressData      :   adressData,
                buildingData    :   buildingData,
                CategoryData    :   CategoryData,
                arrangementData :   arrangementData
            })
        }catch(e){
            console.log(e)
        }
    }),

// ******************************************************* UPLOAD ARRANGEMENT *********************************************************
    server.post('/json/arrangement/create/activity', async function(req,res,next){
        let arrangement_category    = req.body.arrangement_category,
            arrangement_title       = req.body.arrangement_title,
            arrangement_adress      = req.body.arrangement_adress,
            arrangement_text        = req.body.arrangement_text,
            arrangement_buildingNo  = req.body.arrangement_buildingNo,
            arrangement_dateStart   = req.body.arrangement_dateStart,
            arrangement_dateEnd     = req.body.arrangement_dateEnd,
            arrangement_price       = req.body.arrangement_price,
            arrangement_show        = req.body.arrangement_show;
        try{
            const rows  = await appPost.post_arrangement(
                arrangement_show,                
                arrangement_category,
                arrangement_title,
                arrangement_text,
                arrangement_adress,
                arrangement_buildingNo,
                arrangement_dateStart,
                arrangement_dateEnd,
                arrangement_price);
            res.json(200,rows)
        }catch(e){
            console.log(e)
        }
    });
}