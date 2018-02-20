(function () {
    console.log('test')

    var parseQueryString = function (url) {
        // spørger hvad der er i url
        var urlParams = {};
        url.replace(
            // finder variablen i url
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function ($0, $1, $2, $3, $4) {
                urlParams[$1] = $3;
            }
        );

        return urlParams;
        // retunere variablen i et array fra url
    }

    var urlToParse = location.search;
    // parse = tager en ting af gangen, i dette tilfælde 
    var url = parseQueryString(urlToParse);

    var param = JSON.stringify(url)
    // stringify = sætter JSON koden sammen, så den fjerne mellemrummene og sætter , imellem. 
    console.log(param)
    if (param != '{}') {
        if (url.input != null) {
            // ! betyder IKKE
            udskriv_fra_search(url.input)
        }
        else if (url.produkt_id != null) {
            udskriv_fra_id(url.produkt_id)
        }
        else if (url.fk_kategori != null) {
            udskriv_fra_kategori(url.fk_kategori)
        }
        // else if (url.slet !=null) {
        //     slet_produkt(url.slet)
        // }
    }
    else {
        udskriv_alle();
        rediger_produkt();
    }
})();
// SLET PRODUKT

// function slet_produkt(){
//     fetch('http://159.89.11.194:1337/produkt/' + searchquery)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);

//         data.forEach(function (element) {
//             document.getElementById('content_search').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
//         <p>${element.fk_navn}</p>  v 
//         <img src="media/${element.img}" alt="">
//         <p>${element.pris}</p>
//         </section>`
//         }, this);
//     });
// return false;
// }

// UDSKRIV ALT
function udskriv_fra_search(searchquery) {
    fetch(host + ':1337/produkt_search/' + searchquery)
    // fetcher fra min host
        .then((response) => {
            return response.json();
            // sender det over som et json array
        })
        .then((data) => {
            // .then her tager vi imod json array
            console.log(data);
            // denne for each tager det der står i json array og putter det ind i html via getElementbyId.
            data.forEach(function (element) {
                document.getElementById('content_search').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
            <p>${element.fk_navn}</p>  v 
            <img src="media/${element.img}" alt="">
            <p>${element.pris}</p>
            </section>`
            // her har jeg skrevet op hvordan det skal stå i html dokumentet.
            }, this);
        });
    return false;

};
// UDSKRIV FRA ID
function udskriv_fra_id(searchquery) {
    fetch(host + ':1337/produkt/' + searchquery)
        .then((response) => {
            console.log(response + 'hej')
            return response.json();

        })
        .then((data) => {
            console.log(data);

            data.forEach(function (element) {
                document.getElementById('content_search').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
            <p>${element.fk_navn}</p>  v 
            <img src="media/${element.img}" alt="">
            <p>${element.pris}</p>
            </section>`
            }, this);
        });
    return false;
};
// SLUT

// UDSKRIV FRA KATEGORI
function udskriv_fra_kategori(searchquery) {
    fetch(host + ':1337/produkt')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById('conctent').innerHTML = data[0].navn;
            data.forEach(function (element) {
                if (element.fk_kategori == searchquery) {
                    document.getElementById('content_1').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                    <h3>${element.fk_navn}</h3>
                    <img src="media/${element.img}" alt="">
                    <p>${element.pris}</p>
                    </section>`
                }
            }, this);
        });
}
// SLUT

// UDSKRIV ALT
function udskriv_alle() {
    fetch(host + ':1337/produkt')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById('conctent').innerHTML = data[0].navn;
            data.forEach(function (element) {
                document.getElementById('content_1').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
        <h3>${element.fk_navn}</h3> 
        <img src="media/${element.img}" alt="">
        <p>${element.pris}</p>
        </section>`
            }, this);
        });

// UDSKRIV FORSTÆRKER
    fetch(host + ':1337/produkt_fors')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById('conctent').innerHTML = data[0].navn;
            data.forEach(function (element) {
                document.getElementById('content_2').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
        <h3>${element.fk_navn}</h3>
        <img src="media/${element.img}" alt="">
        <p>${element.pris}</p>
        </section>`
            }, this);
        });
// UDSKRIV HØJTALER
    fetch(host + ':1337/produkt_hojt')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById('conctent').innerHTML = data[0].navn;
            data.forEach(function (element) {
                document.getElementById('content_3').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
        <h3>${element.fk_navn}</h3>
        <img src="media/${element.img}" alt="">
        <p>${element.pris}</p>
        </section>`
            }, this);
        });
}
// SLUT

// REDIGEREING FUNKTION

