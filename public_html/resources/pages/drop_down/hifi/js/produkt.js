(function () {

    var parseQueryString = function (url) {
        // spørger hvad der er i url
        var urlParams = {};
        url.replace(
            // finder variablen i url
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function ($0, $1, $2, $3) {
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
    }
    else {
        udskriv_alle();
    }

})();

// UDSKRIV FRA KATEGORI
function udskriv_fra_kategori(searchquery) {
    fetch(host + ":" + port + '/produkt')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById('conctent').innerHTML = data[0].navn;
            data.forEach(function (element) {
                // her bliver der set på url
                if (element.fk_kategori == searchquery && element.display == 1) {
                    document.getElementById('content_1').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                    <h3>${element.fk_navn}</h3>
                    <img src="media/${element.img}" alt="">
                    <p>${element.pris}</p>
                    <a href="?produkt_id=${element.id}">Mere info<a>
                    </section>`
                }
            }, this);
        });
}

// UDSKRIV ALLE
function udskriv_alle() {
    fetch(host + ":" + port + '/produkt')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById('conctent').innerHTML = data[0].navn;
            data.forEach(function (element) {
                if (element.display == 1) { 
                    document.getElementById('content_1').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                    <h3>${element.fk_navn}</h3> 
                    <img src="media/${element.img}" alt="">
                    <p>${element.pris}</p>
                    <a href="?produkt_id=${element.id}">Mere info<a>
                    </section>`
                }  
            }, this);
        });
}

// UDSKRIV FRA SEARCH
function udskriv_fra_search(searchquery) {
    fetch(host + ":" + port + '/produkt_search/' + searchquery)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            data.forEach(function (element) {
                if(element.display == 1){
                document.getElementById('content_search').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                    <p>${element.fk_navn}</p>  v 
                    <img src="media/${element.img}" alt="">
                    <p>${element.pris}</p>
                    </section>`
                }
            }, this);
        });
    return false;

}

// UDSKRIV FRA ID
function udskriv_fra_id(searchquery) {
    fetch(host + ":" + port + '/produkt/' + searchquery)
        .then((response) => {
            console.log(response + 'hej')
            return response.json();

        })
        .then((data) => {
            console.log(data);

            data.forEach(function (element) {
                if(element.display == 1){
                    document.getElementById('content_search').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                    <p>${element.fk_navn}</p>  v 
                    <img src="media/${element.img}" alt="">
                    <p>${element.pris}</p>
                    </section>`
                }
            }, this);
        });
    return false;
}

// SØGEMASKINE

function search_button() {


    var input = document.getElementById("search_button_input").value;


    console.log(input)

    window.location = (SiteAdress + '/static/resources/pages/drop_down/hifi/produkt.html?input=' + input)

    // alert('HEJ FRA ALERT')
    // window.location.href = "file:///C:/Users/mrcaptain/Documents/Web-integrator-hoved/projekt_nummer_01_ptr/web/produkt.html";
    return false;
    //   return false for at søge knappen ikke udfører sin default funktion.
};