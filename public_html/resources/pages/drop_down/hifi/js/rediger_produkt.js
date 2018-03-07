// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// SLET FUNKTION


// slet funktionen, bindes til hver slet knap efter alle produkterne er hentet
function sletItem(event) {
      if (confirm('Er du sikker?')) {
            let id = (isNaN(event.target.dataset['id']) ? 0 : event.target.dataset['id']);

            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            let init = {
                  method: 'delete',
                  headers: headers,
                  cache: 'no-cache'
            };
            let request = new Request( host + ":" + port +`/produkt/${id}`, init);

            fetch(request)
                  .then(response => {
                        if (response.status == 204) {
                              window.location.replace(`index.html`);
                        } else {
                              throw new Error('Produkt blev ikke slettet');
                        }
                  }).catch(err => {
                        console.log(err);
                  });
      }
}

// SLUT

document.addEventListener("DOMContentLoaded", event => {


      // REDIGER FUNKTION

      if (getParameterByName('action') == "edit") {
            let productId = (getParameterByName('id') != null ? getParameterByName('id') : 0);

            fetch(host + port + `/produkt/${productId}`)
                  .then((response) => {
                        if (response.ok) {
                              return response.json();
                        }
                  })
                  .then((json) => {

                        // erstat punktum med komma
                        let pris = json[0].pris;
                        pris = pris.replace('.', ',');

                        // console.log(Json[0].display):

                        document.querySelector('#productForm').innerHTML = `
                <h2>Rediger produkt</h2>
                <label>Produkt navn</label>
                <input type="text" name="productName" id="productName" value="${json[0].fk_navn}">
                <br>
                <label>Produkt beskrivelse</label>
                <input type="text" name="productDescription" id="productDescription" value="${json[0].beskrivelse}">
                <br>
                <label>Produkt pris</label>
                <input type="text" name="productPrice" id="productPrice" value="${pris}">
                <br>
                <label>Produkt Kategori (1-3)</label>
                <input type="text" name="productKategori" id="productKategori" value="${json[0].fk_kategori}">
                <br>
                <label>Produkt Producent</label>
                <input type="text" name="producent" id="producent" value="${json[0].fk_producent}">
                <br>
                <label><input type="checkbox" name="productDisplay" id="productDisplay" value=""></label>
                <br>
                <button>Gem</button>
                <a href="index.html" class="button">Annuller</a> <span id="productsFormError" class="error"></span>
                <hr>`;
                        //     document.querySelector('#productDisplay').checked = true
                        //     if (document.querySelector('#productDisplay').checked == true){
                        //       active = 1
                        //   };

                        let productFormButton = document.querySelector("#productForm button");

                        productFormButton.addEventListener('click', function (event) {
                              let name = document.querySelector('#productName').value;
                              let display = document.querySelector('#productDisplay').checked
                              let description = document.querySelector('#productDescription').value;
                              let pris = document.querySelector('#productPrice').value;
                              let kategori = document.querySelector('#productKategori').value;
                              let producent = document.querySelector('#producent').value;
                              let id = (getParameterByName('id') != null ? getParameterByName('id') : 0);
                              console.log(name, description, pris, id, display)

                              // erstat komma med punkt, så isNaN funktionen fungerer hensigtsmæssigt
                              pris = pris.replace(',', '.');

                              if (id != 0 && name != '' && description != '' && !isNaN(pris) && id > 0) {
                                    document.querySelector('#productsFormError').innerHTML = "";
                                    let headers = new Headers();
                                    headers.append('Content-Type', 'application/json');

                                    let init = {
                                          method: 'PUT',
                                          headers: headers,
                                          body: `{
                                           "id": "${id}",
                                           "fk_navn": "${name}",
                                           "pris": "${pris}",
                                           "fk_kategori":"${kategori}",
                                           "beskrivelse": "${description}",
                                           "fk_producent":"${producent}"
                                           "display":"${display}",
                                          }`,
                                          cache: 'no-cache',
                                          cors: 'cors'
                                    };
                                    //  let init = {
                                    //       method: 'PUT',
                                    //       body: JSON.stringify({
                                    //          "id": id,
                                    //          "fk_navn": name,
                                    //          "beskrivelse": description,
                                    //          "pris": pris
                                    //       }),
                                    //       cache: 'no-cache',
                                    //       cors: 'cors'
                                    //    };
                                    let request = new Request(host+ port + `/admin/produkt/${id}`, init);

                                    fetch(request)
                                          .then(response => {

                                                if (response.status == 200) {
                                                      // window.location.replace(`index.html`);
                                                      alert('PRODUKT INDSAT')
                                                } else {
                                                      throw new Error('Produkt blev ikke opdateret')
                                                }
                                          }).catch(err => {
                                                console.log(err);
                                          });
                                    alert('VENT')

                              } else {
                                    document.querySelector('#productsFormError').innerHTML = "Udfyld venligst alle felter korrekt";
                              }
                        });
                  })
                  .catch((err) => {
                        console.log(err);
                  });


      } else {

            // REDIGER FUNKTION SLUT

            // OPRET PRODUKT

            // vis tom formular til oprettelse af et produkt
            document.querySelector('#productForm').innerHTML = `
          <h2>Opret nyt produkt</h2>
          <label>Produkt navn</label>
          <input type="text" name="productName" id="productName" value="">
          <br>
          <label>Produkt beskrivelse</label>
          <input type="text" name="productDescription" id="productDescription" value="">
          <br>
          <label>Produkt pris</label>
          <input type="text" name="productPrice" id="productPrice" value="">
          <br>
          <label>Produkt Kategori (1-3)</label>
          <input type="text" name="productPrice" id="productKategori" value="">
          <br>
          <label>Produkt Producent</label>
          <input type="text" name="productPrice" id="product" value="">
          <br>
          
          <button>Gem</button>
          <a href="index.html" class="button">Annuller</a> <span id="productsFormError" class="error"></span>
          <hr>`;


            // bind gem funktionen til knappen
            let productFormButton = document.querySelector("#productForm button");
            productFormButton.addEventListener('click', function (event) {
                  let name = document.querySelector('#productName').value;
                  let description = document.querySelector('#productDescription').value;
                  let pris = document.querySelector('#productPrice').value;
                  let kategori = document.querySelector('#productKategori').value;
                  let producent = document.querySelector('#product').value;

                  // erstat komma med punkt, så isNaN funktionen fungerer hensigtsmæssigt
                  pris = pris.replace(',', '.');

                  if (name != '' && description != '' && !isNaN(pris)) {
                        document.querySelector('#productsFormError').innerHTML = "";
                        let url = host + port + `/produkter`;
                        let headers = new Headers();
                        headers.append('Content-Type', 'application/json');

                        let init = {
                              method: 'post',
                              headers: headers,
                              body: JSON.stringify({
                                    name: name,
                                    description: description,
                                    pris: pris
                                    
                              }),
                              cache: 'no-cache',
                              mode: 'cors'
                        };
                        let request = new Request(url, init);

                        fetch(request)
                              .then(response => {
                                    // hvis gem handlingen gik fejlfrit igennem, reloades siden
                                    if (response.status == 200) {
                                          window.location.replace(`index.html`);
                                    } else {
                                          throw new Error('Produkt blev ikke oprettet');
                                    }
                              })
                              .catch(err => {
                                    console.log(err);
                              });
                  } else {
                        document.querySelector('#productsFormError').innerHTML = "Udfyld venligst alle felter korrekt";
                  }

            });
      }

      // SLUT

      // HENT ALLE PRODUKTER FUNKTION


      fetch(host+ port +'/produkt')
            .then((response) => {
                  if (response.ok) {
                        return response.json();
                  }
            })
            .then((json) => {
                  console.log(json)
                  let list = `
             <table>
                <tr>
                   <th></th>
                   <th>id</th>
                   <th>navn</th>
                   <th>pris</th>
                </tr>`;

                  for (let i = 0; i < json.length; i++) {
                        let pris = json[i].pris;
                        pris = pris.replace('.', ',');
                        list += `
                <tr>
                   <td>
                      <a href="?action=edit&id=${json[i].id}" class="button edit">ret</a>
                  //     <a href="#" class="button delete" data-id="${json[i].id}">slet</a>
                   </td>
                   <td>${json[i].id}</td>
                   <td>${json[i].fk_navn}</td>
                   <td style="text-align:right">${pris}</td>  
                </tr>`;
                  }

                  list += `</table><hr>`;

                  document.querySelector('#productsList').innerHTML = list;

                  // lokaliser alle slet knapper, og tilføj en slet funktion
                  let deleteButtons = document.querySelectorAll('#productsList a.delete');
                  deleteButtons.forEach((button) => {
                        button.addEventListener('click', sletItem);
                  })
            })
            .catch((err) => {
                  console.log(err);
            })
});

//  SLUT