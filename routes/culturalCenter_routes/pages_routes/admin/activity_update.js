const db            = require('../../../.././config/sql').connect_culturalCenter();
const get_all_Where = require('../../services/getAllWhere');
const getAll        = require('../../services/getAll');

module.exports = function (server) {
    var all;

    server.get('/culturalcenter/admin/activity', function (req, res) {
        all = false;
        res.render('pages/culturalcenter/pages/admin/admin_activity',{
        })
    });
    server.get('/culturalcenter/admin/activity/:name', async function(req,res){
        let name = req.params.name;
        all = true;
        try{
            const categoryData      = await get_all_Where.category_link_name(name);
            let arrangementType     = categoryData[0].category_id;
            const arrangementData   = await get_all_Where.arrangement_type(arrangementType);
            const adressData        = await getAll.getAlltb_adress();
            const buildingData      = await getAll.getalltb_building();
            const allCategoryData   = await getAll.getAlltb_category();
            
            res.render('pages/culturalcenter/pages/admin/admin_activity.ejs',{
                categoryData    : categoryData,
                arrangementData : arrangementData,
                adressData      : adressData,
                buildingData    : buildingData,
                allCategoryData : allCategoryData
            })
        }catch(e){
            console.log(e)
        }
    }),
// UPDATE ARRANGEMENT =========================
    server.put('/json/arrangement/update/:id',function(req,res, next){
        let arrangement_id          = req.params.id,
            arrangement_category    = req.body.arrangement_category,
            arrangement_title       = req.body.arrangement_title,
            arrangement_adress      = req.body.arrangement_adress,
            arrangement_text        = req.body.arrangement_text,
            arrangement_buildingNo  = req.body.arrangement_buildingNo,
            arrangement_dateStart   = req.body.arrangement_dateStart,
            arrangement_dateEnd     = req.body.arrangement_dateEnd,
            arrangement_price       = req.body.arrangement_price,
            arrangement_show        = req.body.arrangement_show;
            // console.log(arrangement_show)
        let sqlUpdate = `
        UPDATE 
            tb_arrangements 
        SET 
            arrangement_hide        = '${arrangement_show}',
            fk_type_id              = '${arrangement_category}',
            arrangement_title       = '${arrangement_title}',
            arrangement_text        = '${arrangement_text}',
            fk_adress               = '${arrangement_adress}',
            fk_buildingNo           = '${arrangement_buildingNo}',
            arrangement_dateStart   = '${arrangement_dateStart}',
            arrangement_dateEnd     = '${arrangement_dateEnd}',
            arrangement_price       = '${arrangement_price}'

        WHERE 
            arrangement_id          = ${arrangement_id}`
                // console.log('SQL ======== ', sqlUpdate, '=============')
        let verify = 
            arrangement_title       != "" && 
            arrangement_text        != "" &&
            arrangement_adress      != "" &&
            arrangement_buildingNo  != "" &&
            arrangement_dateStart   != "" &&
            arrangement_dateEnd     != "" &&
            arrangement_price       != "";
        let result = [
            arrangement_title,
            arrangement_text, 
            arrangement_adress, 
            arrangement_buildingNo, 
            arrangement_dateStart,
            arrangement_dateEnd, 
            arrangement_price
            ];
        // if (verify){
            db.execute(sqlUpdate, function (err,rows){
                console.log(rows)
                if(err){
                    res.send(err)
                }else{
                    res.json(200, rows);
                }
    
        })            
    })
}