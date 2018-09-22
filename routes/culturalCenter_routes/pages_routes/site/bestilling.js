const db            = require('../../../.././config/sql').connect_culturalCenter();
const hall          = require('../../../.././public/resources/pages/cultural_center/modules/data/hallData4.js')

// console.log(data.halls[0].hall1.bookedSeats)
module.exports = function (server){

    server.get('/culturalcenter/bestilling',function(req,res){
        res.render('pages/culturalcenter/pages/site/bestilling.ejs',{
            hallData : hall   
        })
        
    });

}

