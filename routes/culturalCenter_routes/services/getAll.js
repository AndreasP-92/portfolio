const db = require('../../.././config/sql').connect_culturalCenter()

module.exports = {

// GET ALL CATEGORY ====================================
    getAlltb_category: function () {
        return new Promise((resolve, reject) => {
            var sql = `SELECT * FROM tb_category`;
            db.query(sql, function (err, data){
                if (err){
                    reject(err)
                }else{
                    resolve(data);
                }
            });
        })
    },
// GET ALL MAIN GALLERY =================================
    getAlltb_maingallery: function(){
        return new Promise((resolve, reject)=>{
            var sql=`SELECT * FROM tb_maingallery`;
            db.query(sql, function (err, data){
                if (err){
                    reject(err)
                }else{
                    resolve(data);
                }
            })
        })
    },
// GET ALL TB ARRANGEMENTS
    getalltb_arrangements:function(){
        return new Promise((resolve, reject)=>{
            var sql=`SELECT * from tb_arrangements ORDER BY arrangement_id DESC`;
            db.query(sql, function (err, data){
                if (err){
                    reject(err)
                }else{
                    resolve(data);
                }
            })
        })
    },
// GET ALL TB ARRANGEMENTS ORDER BY DESC =============
    getAlltb_arrangements_DESC: function(){
        return new Promise((resolve, reject)=>{
            var sql=`SELECT * from tb_arrangements ORDER BY arrangement_id DESC`;
            db.query(sql, function (err, data){
                if (err){
                    reject(err)
                }else{
                    resolve(data);
                }
            })
        })
    },    
// GET ALL TB ARRANGEMENTS ORDER BY DESC =============    
    getAlltb_arrangements_DESC_limit_3: function(){
        return new Promise((resolve, reject)=>{
            var sql=`SELECT * from tb_arrangements ORDER BY arrangement_id DESC LIMIT 3`;
            db.query(sql, function (err, data){
                if (err){
                    reject(err)
                }else{
                    resolve(data);
                }
            })
        })
    },
// GET ALL TB ADRESS =============================

    getAlltb_adress: function(){
        return new Promise((resolve, reject)=>{
            var sql=`SELECT * FROM tb_adress`;
            db.query(sql, function (err, data){
                if (err){
                    reject(err)
                }else{
                    resolve(data);
                }
            })
        })
    },
// GET ALL BUILDING NUMBERS ======================
    getalltb_building: function(){
        return new Promise((resolve, reject)=>{
            var sql=`SELECT * FROM tb_building`;
            db.query(sql, function (err, data){
                if (err){
                    reject(err)
                }else{
                    resolve(data);
                }
            })
        })
    },
}