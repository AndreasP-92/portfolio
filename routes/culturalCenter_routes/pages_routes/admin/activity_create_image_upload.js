const db        = require('../../../.././config/sql').connect_culturalCenter();
const getAll    = require('../../services/getAll');

module.exports = function (server) {

    server.get('/culturalcenter/admin/image_upload', async function(req,res){
        try{
            const arrangementData = await getAll.getAlltb_arrangements_DESC();
            res.render('pages/culturalcenter/pages/admin/admin_create_upload_image.ejs',{
                arrangementData : arrangementData
            })
        } catch(e) {
            console.log(e);
        }
    })
    server.post('/json/arrangement/create/activity/upload_img/:id', function(req, res) {
        if (!req.files)
            return res.status(400).send('No files were uploaded.');
// NAMING PARAMS ===============================================================
        let sampleFile  = req.files.sampleFile,
            sampleId    = req.params.id;
        console.log('IMAGE NAME : ',sampleId)
// FILE PATH ( SERVER SITE ) ===================================================
        sampleFile.mv(`public/resourcess/pages/cultural_center/media/aktiviteter/${sampleFile.name}`, function(err) {
// SQL CALL ====================================================================
            sql_update_image = `
            UPDATE
            tb_arrangements
            SET
            arrangement_imgPath    = '${sampleFile.name}'
            WHERE
            arrangement_id          = '${sampleId}'`
            console.log('SQL UPLOAD',sql_update_image)
            db.execute(sql_update_image, function(err, rows){
                    if (err)
                        return res.status(500).send(err);
                    res.render('pages/culturalcenter/pages/admin/admin');
                }) 
            });
        });
}