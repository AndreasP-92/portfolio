(function () {
    console.log('hej')
    udskriv_fra_kontakt();
})();

function udskriv_fra_kontakt(kontakt) {
    fetch(host + port + '/kontakt')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById('conctent').innerHTML = data[0].navn;
            data.forEach(function (element) {
                // her bliver der set på url
                if (element.id ) {
                    document.getElementById('content_kontakt').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                            <div class="kontakt">
                            <h3>Navn : ${element.navn}</h3>
                            <p>Email : ${element.email}</p>
                            <p>Besked : ${element.besked}</p>
                            </div>
                            </section>`
                }
            }, this);
        });
}; 