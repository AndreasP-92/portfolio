    (function(){
        console.log('HEJ')
        udskriv_bruger();
    })();

    // UDSKRIVER BRUGERNE ******************************************'
    function udskriv_bruger(bruger) {
        fetch(host + port + '/bruger')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                data.forEach(function (element) {
                        document.getElementById('content_bruger').innerHTML += `<section class="celle col-lg-4 demo-content inner-section">
                                <div class="bruger">
                                <h3>Navn : ${element.username}</h3>
                                </div>
                                </section>`
                }, this);
            });
    }; 