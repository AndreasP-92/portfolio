
// NEWS

fetch(host + ':1337/produkt_news')
// henter informationer fra localhost
.then((response) => {
    return response.json();
    // laver det til et json array
})
.then((data) => {
    // tager imod json array
    console.log(data);
    // document.getElementById('conctent').innerHTML = data[0].navn;
    data.forEach(function (element) {
        if(element.display == 1){
        document.getElementById('content_news').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
        <h3>${element.fk_navn}</h3>
        <img src="media/${element.img}" alt="">
        <p>${element.pris}</p>
</section>`
// laver opsætningen i html dokumentet
         }
    }, this);
});



// SEARCH BAR

// $(document).ready(function () {
//     $('input.typeahead').typeahead({
//         name: 'hifi',
//         remote: 'http://159.89.11.194:1337/search?key=%QUERY',
//         limit: 10
//     });
// });


// ADMIN - INDSÆTTELSE AF NY VARE

// Lytter på om der er klikket på knappen gem - herefter postes data som indsættes i databasen
// document.querySelector('#gem').addEventListener('click', (event) => {
//     console.log('event ok');
//     event.preventDefault();
//     let navn = document.querySelector('#fk_navn').value;
//     let type = document.querySelector('#fk_kategori').value;
//     let pris = document.querySelector('#pris').value;
//     let billede = document.querySelector('#img').value;

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     let init = {
//         method: 'POST',
//         headers: headers,
//         body: `{"navn":"${navn}","type":"${type}","pris":"${pris}","billede":"${billede}" }`,
//         cache: 'no-cache',
//         mode: 'cors'
//     };

//     let request = new Request('http://159.89.11.194:1337/create', init);

//     fetch(request)
//         .then(response => { console.log(response) }).catch(err => { console.log(err) });

// });




// SEARCH-BUTTON


function search_button() {
    
    
    var input = document.getElementById("search_button_input").value;
    
    
    console.log(input)
    
    window.location=(SiteAdress + '/produkt.html?input='+input)
    
    // alert('HEJ FRA ALERT')
    // window.location.href = "file:///C:/Users/mrcaptain/Documents/Web-integrator-hoved/projekt_nummer_01_ptr/web/produkt.html";
  return false;
//   return false for at søge knappen ikke udfører sin default funktion.
};

