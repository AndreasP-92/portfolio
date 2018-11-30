const db = require('../../../../config/sql').connect_perfectshoes()


module.exports = {

// ********************************************************************* INDEX *********************************************************************

shoesWithLimit: function (gender) {
    return new Promise((resolve, reject) => {
        var sql = `
        SELECT 
            * 
        FROM 
            tb_products
        WHERE
            fk_gender = ? 
        ORDER BY
            product_id DESC
        LIMIT 3`;
        db.query(sql, gender, function (err, data){
            if (err){
                reject(err)
            }else{
                resolve(data);
            }
        });
    })
},

// ********************************************************************* SHOP *********************************************************************

    products: function(productId){
        return new Promise((resolve,reject)=>{
            let sql = `
            SELECT 
                *
            FROM
                tb_products
            WHERE
                product_id IN (${productId})
            `

            db.query(sql,productId,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
// ********************************************************************* PROFILE **********************************************************************************
    countGoogleUsers: function(username){
        return new Promise((resolve, reject) =>{
            sql = `
            SELECT 
                COUNT(google_displayname) as google_displayname
            FROM
                tb_googlekeys
            WHERE
                google_displayname = ?
            `
            db.execute(sql, [username], (err,data)=>{
                if(err)reject(err);
                resolve(data)
            })
        })
    },
    google: function(googleId){
        return new Promise((resolve, reject) =>{
            sql = `
            SELECT
                *
            FROM
                tb_googlekeys
            WHERE
                google_gkey	= ?
            `
            db.execute(sql, [googleId], (err,data)=>{
                if(err)reject(err);
                resolve(data)
            })
        })
    },
    profile: function(username){
        return new Promise ((resolve,reject)=>{
            sql = `
            SELECT
                *
            FROM
                tb_profiles
            WHERE
                profile_username = ?
            `
            db.query(sql,username,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
    favorites: function(username){
        return new Promise((resolve, reject) =>{
            sql = `
            SELECT 
                profile_favorites
            FROM
                tb_profiles
            WHERE
                profile_username = ?
            `
            db.execute(sql, [username], (err,data)=>{
                if(err)reject(err);
                resolve(data)
            })
        })
    },
    favoriteProducts: function(productId){
        return new Promise((resolve, reject) =>{
            console.log(productId)
            sql = `
            SELECT 
                *
            FROM
                tb_products
            WHERE
                product_id IN (${productId})
            `
            db.execute(sql, [productId], (err,data)=>{
                if(err)reject(err);
                resolve(data)
            })
        })
    },
    profileEmail: function(mail){
        return new Promise ((resolve,reject)=>{
            sql = `
            SELECT
                *
            FROM
                tb_profiles
            WHERE
                profile_mail = ?
            `
            db.query(sql,mail,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
    shippinginfo: function(username){
        return new Promise ((resolve,reject)=>{
            sql = `
            SELECT
                *
            FROM
                tb_profiles_shippinginfo
            WHERE
                shippinginfo_user = ?
            `
            db.query(sql,username,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
    supportMessage: function(username){
        return new Promise ((resolve,reject)=>{
            sql = `
            SELECT
                *,
                DATE_FORMAT(message_date, '%d/%m-%y - %k:%i') AS message_date
            FROM
                tb_support_messages
            WHERE
                message_regarding = ?
            `
            db.query(sql,username,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },
    basketHistory: function(username){
        return new Promise ((resolve,reject)=>{
            sql = `
            SELECT
                *,
                DATE_FORMAT(history_date, '%d/%m-%y - %k:%i') AS history_date
            FROM
                tb_profiles_baskethistory
            WHERE
                history_user = ?
            `
            db.query(sql,username,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    },

}