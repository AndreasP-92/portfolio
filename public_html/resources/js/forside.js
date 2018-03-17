(function(){
    burger();
})()



// ************************************************* PHONE NUMBER *********************************************************
function phone (){
    document.getElementById('phone').addEventListener('click',event=>{
        alert('28 88 81 92')
    })
}

// ************************************************ BURGER MENNU *********************************************************

function burger (){
    var burger = document.querySelector('#burger')
    var nav = document.querySelector('nav')
    burger.addEventListener("click", function(){
        console.log('burger læst')
        nav.classList.toggle("show")
    })
}