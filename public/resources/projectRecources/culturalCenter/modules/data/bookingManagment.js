const fs        = require('fs')
const updater   = require('jsonfile-updater')

function getParsedPackage(){
    return JSON.parse(fs.readFileSync('./hallData3.json'))
}

module.exports = {

    createHallFile: (fileName,fileExtension, insertHall)=>{
        fs.writeFile(`${fileName}.${fileExtension}`,insertHall,function(err){
            if(err) throw err
            console.log('File Written!')    
        })
    },
    createNewHall: (fileName, fileExtension, hall, seatsX, seatsY, bookedSeats) => {
        fs.readFile(`${fileName}.${fileExtension}`, function (err, data){
            if(err)throw err;
            var newObject       = {
                [hall] :{seatsX : seatsX, seatsY : seatsY, bookedSeats : bookedSeats
                }
            }
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.halls.push(newObject)    

            fs.writeFile(`${fileName}.${fileExtension}`, JSON.stringify(arrayOfObjects), 'utf-8', function (err){
                if (err) throw err;
                console.log(hall,' Inserted!')
            })
        })
    },
    seatStatus:(fileName, fileExtension, seatStatus, hall, hallIndex )=>{
        fs.readFile(`${fileName}.${fileExtension}`, function (err, data){
            if(err)throw err;
            var newObject       = seatStatus
            var arrayOfHalls = JSON.parse(data)

            var bookedSeatArray = arrayOfHalls.halls[0][hall].bookedSeats.concat(newObject) 
            bookedSeatArray.sort()
            // console.log(arrayOfHalls.halls[1][hall].bookedSeats)
            arrayOfHalls.halls[0][hall].bookedSeats=bookedSeatArray            

            fs.writeFile(`${fileName}.${fileExtension}`, JSON.stringify(arrayOfHalls), 'utf-8', function (err){
                if (err) throw err;
                console.log('Seat :',newObject,'Booked!')
            })
        })

    },
}