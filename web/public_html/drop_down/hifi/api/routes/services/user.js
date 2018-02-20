const mysql = require('mysql2')
const db = require('../config/sql').connect();




function logind(callback, username, password){
    var sql = `SELECT count(*) as count FROM user
    where username = '${username}' and password = '${password}' `;
    
            db.query(sql,function(err,result){
                if(err)
                    callback(err,null);
                else
                    callback(null,result);
            });




    // if (username =='admin'&&
    //     password == '1234'){
    //     return false
    // }else{
    //     return false
    // }
}
module.exports = {
    'login' :logind
}
