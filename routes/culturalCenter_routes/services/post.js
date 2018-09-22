const db = require('../../.././config/sql').connect_culturalCenter()

module.exports = {

// UPLOAD ARRANGEMENT ===================================
    post_arrangement: function (a,b,c,d,e,f,g,h,i) {
        return new Promise((resolve, reject) => {
            var sql = `
                INSERT INTO 
                    tb_arrangements(
                        arrangement_hide,
                        fk_type_id,
                        arrangement_title,
                        arrangement_text,
                        arrangement_imgPath,
                        fk_adress,
                        fk_buildingNo,
                        arrangement_dateStart,
                        arrangement_dateEnd,
                        arrangement_price
                    )
                VALUES(
                    '${a}',
                    '${b}',
                    '${c}',
                    '${d}',
                    'missing_picture.jpeg',
                    '${e}',
                    '${f}',
                    '${g}',
                    '${h}',
                    '${i}'
                )`;
            // console.log('SQL ======== ', sql, '=============')            
            db.execute(sql, function (err, data){
                if (err){
                    console.log(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
}
    