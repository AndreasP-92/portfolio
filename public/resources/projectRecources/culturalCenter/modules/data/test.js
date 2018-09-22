const fs        = require('fs')
const updater   = require('jsonfile-updater')

function getParsedPackage(){
    return JSON.parse(fs.readFileSync('./hallData.json'))
}
function update (){
    updater('./hallData.json').set('halls', [500],function(err){
        if(err) return console.log(err)
        
        var pkg = getParsedPackage()
        assert(pkg.halls.include('node'))
        assert.equil(500, pkg.halls[0])
        console.log('ny! ==='+pkg.halls)
    })
}
// getParsedPackage()
// console.log(getParsedPackage())
// create();
update()
var pkgg = getParsedPackage();
// console.log(pkgg.halls[0])

// https://evdokimovm.github.io/javascript/nodejs/2016/11/11/write-data-to-local-json-file-using-nodejs.html

// const fs = require('fs')

// how to push json to json file


// function update (name, age){
//     // læser om filen eksisterer
//     fs.readFile('./hallData2.json', 'utf-8', function (err, data){
//         if(err)throw err;

//         var arrayOfObjects = JSON.parse(data)
//         arrayOfObjects.halls.push({
//             name : `${name}`,
//             age : `${age}`
//         })    
        
//         console.log(arrayOfObjects)
//         // skriver nyt json info
//         fs.writeFile('./hallData2.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err){
//             if (err) throw err;
//             console.log('Indsat!')
//         })
//     })
// }
// // output fra users

// update("HEEEJ","30");


