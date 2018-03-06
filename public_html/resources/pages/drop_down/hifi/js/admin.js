(function(){
    udskriv_alle();
})

// INDSÆTTELSES FORM - ikke brugt endnu

document.querySelector('#submit').addEventListener('click', (event) => {
    // var hide = document.getElementById('hide');
    // hide.style.display = 'none'
    console.log('event ok');
    event.preventDefault();
    let navn = document.querySelector('#insert_navn').value;
    let pris = document.querySelector('#insert_pris').value;
    let varenr = document.querySelector('#insert_varenr').value;
    let antal = document.querySelector('#insert_antal').value;
    let kategori = document.querySelector('#insert_kategori').value;
    let beskrivelse = document.querySelector('#insert_beskrivelse').value;
    let producent = document.querySelector('#insert_producent').value;
    let img = document.querySelector('#insert_img').value;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let init = {
        method: 'POST',
        headers: headers,
        body: `{"fk_navn":"${navn}","varenr":"${varenr}","pris":"${pris}","antal":"${antal}","fk_kategori":"${kategori}","beskrivelse":"${beskrivelse}","fk_producent":"${producent}","img":"${img}"}`,
        cache: 'no-cache',
        mode: 'cors'
        
        
    };
    console.log('HEJ MED DIG')
    let request = new Request(host + '/produkt_insert', init);
    console.log('HEJ MED DIG')

    fetch(request)
        .then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        });



});

// SEARCH-BUTTON


function search_button() {
    console.log('HEJ')
    var input = document.getElementById("search_button_input").value;
    // tager fat i id fra html via getElementbyId

    console.log(input)

    // window.location=('../produkt.html')

    // alert('HEJ FRA ALERT')

    fetch(host + ":" + port + '/produkt_search/' + input)
    // her fetcher jeg fra min localhost
        .then((response) => {
            return response.json();
            // laver det om til et json array
        })
        .then((data) => {
            console.log(data);
            // laver en forEach løkke
            data.forEach(function (element) {
                if(display == 1){
                    document.getElementById('content_search').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                    <p>${element.fk_navn}</p>
                    <img src="media/${element.img}" alt="">
                    <p>${element.pris}</p>
                    </section>`
                    // fortæller den her hvordan det skal opstilles i html dokumentet
                }
            }, this);
        });
    return false;
};
// IKKE FÆRDIG, TAGER VIDERE DAGEN EFTER
// function hent_kategori() { 
    // console.log("GET BY SEARCH")
    // var placeholder = document.querySelector('#hent_content');
    //     fetch('http://159.89.11.194:1337/produkt/' + searchQuery)
    //         .then(function (result) {
    //             return result.json();
    //         })
    //         .then(function (products) {
    //             var form = document.createElement('DIV');
    
    //             products.forEach(function (element) {
    //                 var option = document.createElement('option');
    //                 option.classList.add("products")

    //                 var name = document.createElement('H4'),
    //                     productName = document.createTextNode("Produkt Navn: " + element.product_name);
    //                 name.appendChild(productName);
    //                 option.appendChild(name);

    //                 form.appendChild(option)
    //             });
    //             return form;
    //         })
    //         .then(function (div) {
    //             placeholder.appendChild(div)
    //         })
    //     }
