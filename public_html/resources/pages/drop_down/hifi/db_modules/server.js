const bolche = require('./services/bolche');
const user = require ('./services/user');
// const farver = require


// bolche.getAll(function(err,result){
//     if(err)console.log("fejlbesked..");
//     else console(result);
// });

// bolche.getOne( function(err,result){
//     if (err) console.log("fejlbesked..");
//     else console.log(result)
// },5)

// var values = [id, nanv, farve, vaegt,  smags_surhed,smags_styrke, smags_type, pris]
// bolche.create(function(err,result){
//     if (err)
//         console.log("fejlbesked..."+err);
//     else console.log(result)
// }, null, 'citronfisk',1,10000000,1,1,1,999999999999999999,)

bolche.deleteBolcher(function(err,result){
    if (err)
        console.log("fejlbesked..."+err);
    else console.log(result)
}, 12)


// HENT FARVER
// farver.getA

// user.login(function(err,result){
//     if(err)
//         console.log("forkert brugernavn eller password");
//     else
//         console.log(result[0].count);
// },'frg',1234)