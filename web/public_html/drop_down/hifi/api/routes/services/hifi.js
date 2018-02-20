const mysql = require('mysql2'),
db = require('../config/sql').connect();

function getAll(callback){
db.query("SELECT * FROM bolche", function(err,result){
            if(err)
                callback(err,null);
            else
                callback(null,result);
        }) 
}
function getOne(callback,id){
// var sql ="SELECT * FROM bolche where id=" + id
// var sql =`SELECT * FROM bolche where id= ${id}`
var sql = `SELECT * FROM bolche where id =?`

    db.query(sql,[id],function(err,result){
        if(err)
            callback(err,null);
        else
            callback(null,result);
    });
}
function create(callback,id, navn, farve, vaegt,smags_surhed,smags_styrke, smags_type, pris){
// var sql ="SELECT * FROM bolche where id=" + id
// var sql =`SELECT * FROM bolche where id= ${id}`
var sql = `INSERT into bolcher values ?`
var values = [id, navn, farve, vaegt, smags_surhed,smags_styrke, smags_type, pris]
    db.query(sql,[[values]],function(err,result){
        if(err)
            callback(err,null);
        else
            callback(null,result);
    });
}
function changeName(callback, id, navn){
var sql = "update bolcher set navn ? where id = ?";
db.query(sql,[navn,id], function (err,result){
    if(err)
        callback(err,null);
    else
        callback(null, result);
});
}
function deleteBolcher(callback,id){
var sql = "delete from bolcher where id= ?";
db.query(sql, [id], function(err,result){
    if(err)
        callback(err,null);
    else
        callback(null, result);
})
}
module.exports ={
getAll,
getOne,
create,
changeName,
deleteBolcher
}
