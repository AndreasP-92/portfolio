
// const hallData = require('../../modules/data/hallData4.json')
(function(){
    createSeats(15,10);
    // getData()
    // console.log()
    // alert(JSON.parse(halls.halls[0].hall1.bookedSeats))
})();   
// function readJSON ('../../modules/data/hallData4.json',function(){

// })


function getData (){
    var mydata = JSON.parse(halls);
    // var parsed = halls
    console.log(mydata[0]);
    // alert(mydata[1]);
}
    var array = [];
    console.log(array)

// SEAT SELECT ============================

function seatOnClick (collum,row){
    let selected = document.getElementById(`${collum}.${row}`)
    if(selected.className == "vacant"){
        selected.classList.remove('vacant')
        selected.classList.add("selected")
        var idValue = `${collum}.${row}`
        array.push(idValue)
    } else{
        selected.classList.remove('selected')        
        selected.classList.add('vacant')
        removeSeat(array,idValue)
    }
}
function seatsBook(){

}

// REMOVE SEAT ============================

function removeSeat (array, element){
    const index = array.indexOf(element);
    array.splice(index,1);
}

// SEAT COUNT ============================

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = sessionStorage.clickcount + " Sæde(r) er blevet trykket denne session.";
    }
}

// SEAT CREATION ============================

function createSeats(rows,cols){
    var tableSeats = document.querySelector('.seats');
    var bookedSeats = ["1.1","1.2","9.4"] 

    for (i = 1; i<= rows; i++){
        var tr = document.createElement('tr')
        tr.classList.add(`tr-${i}`);
        tr.setAttribute('id',i)
        // console.log(i)
        // tr.id= i;
        placeholder = document.querySelector(`.tr-${i}`);
        for (j = 1; j <= cols; j++){
            // console.log('find seat ===',seat)
            // console.log('booked',)
            var td = document.createElement('td');
            td.setAttribute('id',i+'.'+j)
            let collum  = i
            let row     = j
            var seat = i+'.'+j;
            
            var booked = bookedSeats.find(function(seat){})
            console.log('1===',booked == "undefined" ? false : true)
            
            if(bookedSeats.find(function(){return seat})){
                td.classList.add('selected')

            }else{
                td.classList.add('vacant')
            }

            td.setAttribute(`onclick`,`seatOnClick(${collum},${row}); clickCounter();`)
            // td.id= i.j;
            tr.appendChild(td)
            // console.log(j)        
        }
        tableSeats.appendChild(tr)
    }
}