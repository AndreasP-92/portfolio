// SØGEMASKINE

function search_button() {


    var input = document.getElementById("search_button_input").value;


    console.log(input)

    window.location = (host + ':3000/produkt.html?input=' + input)

    // alert('HEJ FRA ALERT')
    // window.location.href = "file:///C:/Users/mrcaptain/Documents/Web-integrator-hoved/projekt_nummer_01_ptr/web/produkt.html";
    return false;
    //   return false for at søge knappen ikke udfører sin default funktion.
};

// KONTAKT

document.querySelector('#send').addEventListener('click', (event) => {
    var hide = document.getElementById('hide');
    console.log('event ok');
    event.preventDefault();
    let navn = document.querySelector('#navn').value;
    let mail = document.querySelector('#mail').value;
    let besked = document.querySelector('#besked').value;
    
    if(navn == "" || mail == "" || besked == ""){
        alert("udfyld felt")
    }else{
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let init = {
            method: 'POST',
            headers: headers,
            body: `{"navn":"${navn}","mail":"${mail}","besked":"${besked}"}`,
            cache: 'no-cache',
            mode: 'cors'
            
            
        };
        hide.style.display = 'none'
        let request = new Request(host + ':1337/kontakt_create', init);
        
        fetch(request)
        .then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        });
    }
    
    
    
    
});
// function ValidationEvent() {
    //     var navn = document.getElementById("navn").value;
    //     var email = document.getElementById("email").value;
//     var besked = document.getElementById("besked").value;
//     // Regular Expression For Email
//     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     // Conditions
//     if (navn != '' && email != '' && besked != '') {
//         if (email.match(emailReg)) {
//             if (besked.length == 10) {
//                 // INDSÆT HER MÅSKE???
//                 return true;
//             } else {
//                 alert("Kontakt info skal minds være på 10 bogstaver.");
//                 return false;
//             }
//         } else {
//             alert("ugyldig Email.");
//             return false;
//         }
//     } else {
//         alert("Alle felter skal være udfyldt");
//         return false;
//     }

// };