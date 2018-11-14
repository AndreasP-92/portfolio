const db            = require('../../../.././config/sql').connect_culturalCenter();
const getAll        = require('../../services/getAll');
const get_all_Where = require('../../services/getAllWhere');
const getSpecific   = require('../../services/getSpecific');

var test;
var category_test
module.exports = function (server) {
// SHOW ARRANGEMENT CATEGORIES ===============
    server.get('/culturalcenter/aktiviteter', async function(req,res){
        category_test = false;        
        try{
            const categoryData = await getAll.getAlltb_category();
            res.render('pages/culturalcenter/pages/site/aktiviteter.ejs',{
                activity        : test,
                category        : categoryData,
                categoryCheck   : category_test
            })
        }
        catch(e){
            console.log(e)
        }

    })
// SHOW ARRANGEMENT PER CATEGORY ================
    server.get('/culturalcenter/aktiviteter/:aktivitet',async function(req,res){
        let name = req.params.aktivitet;
        category_test = true
        try{
            const categoryData      = await get_all_Where.category_link_name(name);
            let arrangementType_id  = categoryData[0].category_id;
            const arrangementData   = await get_all_Where.arrangement_type(arrangementType_id);
            const rating            = await getSpecific.arrangement_votes();
            
            
            
            const overallRating     = parseInt(rating[0].arrangement_rating) / parseInt(rating[0].arrangement_vote)
            
            // console.log(overallRating)
            res.render('pages/culturalcenter/pages/site/aktiviteter.ejs',{
                activity: test,
                categoryData: categoryData,
                categoryCheck: category_test,
                arrangementData: arrangementData
            })          
        } catch (e){
            console.log(e)
        }
    })

// POST RATING =============================
        server.post('/JSON/activity/rating/:id', async function(req,res){
            let rating_id   = req.params.id,
                rating_star = req.body.rating;
    
    
            const arrangementRating = await get_all_Where.arrangementRating(rating_id);
            console.log(arrangementRating[0].arrangement_rating)
            let new_rating_star = parseInt(arrangementRating[0].arrangement_rating) + parseInt(rating_star),
                new_votes       = parseInt(arrangementRating[0].arrangement_vote) + parseInt(1)
    
            console.log('NEW VOTES : ===== ',new_votes, '================ NEW RATING : ', new_rating_star,'==================')
            // console.log('')
            sql = `
            UPDATE
                tb_arrangements
            SET
                
                arrangement_rating  = '${new_rating_star}',
                arrangement_vote    = '${new_votes}'
            WHERE
                arrangement_id      = '${rating_id}'
            `
            console.log(sql)
            db.execute(sql,function(err,data){
                if(err){
                    console.log(err)
                } else {
                    res.redirect(`/aktiviteter`)
                }
            })
        })
    
}