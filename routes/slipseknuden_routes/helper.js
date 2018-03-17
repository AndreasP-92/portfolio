var fs = require('fs')

// module.exports = {
//     logFil: function (text, dato){
//         let date = new Date();
//         fs.appendFile('Log tekst','Index check ' + date + '\r\n', function(err){
//             if (err) throw err;
//             console.log('log fil tilføjet')
//         })
//     }
// }
exports.logFil = function (text, ip){
    let date = new Date();
    fs.appendFile('log tekst','Index check ' + date + ip + '\r\n', function(err){
        if(err)throw err;
        console.log('tekst added')
    })
}
