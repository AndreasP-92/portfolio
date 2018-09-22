const db = require('../../.././config/sql').connect_culturalCenter()

module.exports = {

    arrangement_votes:function(){
        return new Promise((resolve, reject)=>{
            var sql = `
            SELECT
                arrangement_rating,
                arrangement_vote
            FROM
                tb_arrangements
            `
            db.query(sql,function(err,data){
                if(err){
                    console.log(err)
                }else {
                    resolve(data)
                }
            })
        })
    }

}
