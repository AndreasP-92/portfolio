const db = require('../../.././config/sql').connect_culturalCenter()

module.exports = {
// GAT ALL TB CATEGORY WHERE LINK = NAME
    category_link_name: function(name){
        return new Promise((resolve, reject) => {
            var sql = `SELECT * FROM tb_category WHERE category_link = '${name}'`;
            db.query(sql, function (err, data){
                if (err){
                    console.log(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
// GAT ALL TB CATEGORY WHERE LINK = NAME
// GET ALL ARRANGEMENTS WHERE fk_type_id = arrangementType
    arrangement_type: function (arrangementType){
        return new Promise((resolve, reject) => {
            var sql = `
                SELECT 
                    arrangement_id,
                    arrangement_rating,
                    arrangement_vote,
                    arrangement_hide,
                    fk_type_id,
                    arrangement_title, 
                    arrangement_imgPath, 
                    arrangement_text, 
                    fk_adress, 
                    fk_buildingNo, 
                    arrangement_dateStart, 
                    arrangement_dateEnd, 
                    arrangement_price, 
                    adress_id, 
                    adress_name, 
                    building_id, 
                    building_number
                FROM (( 
                    tb_arrangements 
                INNER JOIN 
                    tb_adress ON fk_adress = adress_id )
                INNER JOIN 
                    tb_building ON fk_buildingNo = building_id)
                WHERE 
                    fk_type_id = '${arrangementType}'
            `;
            db.query(sql, function (err, data){
                if (err){
                    console.log(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
    arrangementRating: function (arrangementId){
        return new Promise((resolve, reject) => {
            var sql = `
            SELECT
            arrangement_rating,
            arrangement_vote
            FROM
            tb_arrangements
            WHERE
                arrangement_id = '${arrangementId}'         
            `;
            db.query(sql, function (err, data){
                if (err){
                    console.log(err)
                }else{
                    resolve(data);
                }
            });
        })
    }

}