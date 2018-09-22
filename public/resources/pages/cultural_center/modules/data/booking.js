const test = require('./bookingManagment');

// File ---------------------
let fileName = 'hallData1111'
let fileExtension = 'json'
// HALL INFO ----------------
let hall        = 'hall1',
    hallIndex   = 0
    seatsX      = 20,
    seatsY      = 10,
    seats = []
    seatStatus = [1.1,1.2,1.3,1.4];
// INSERT HALL --------------
let insertHall  = `{"halls":[{
    "${hall}" : {
        "seatsX"        : ${seatsX},
        "seatsY"        : ${seatsY},
        "bookedSeats"   : []
    }
}]}`
// console.log(seatStatus)
// test.createHallFile(fileName, fileExtension, insertHall)
// test.createNewHall(fileName, fileExtension, hall, seatsX, seatsY, seats)
test.seatStatus(fileName, fileExtension, seatStatus, hall, hallIndex)

console.log(hallIndex)
