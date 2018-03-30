document.addEventListener("DOMContentLoaded", function(){
    burger();
    // validater();
  });


// ************************************************ BURGER MENNU *********************************************************

function burger() {
    var burger = document.querySelector('#burger')
    var nav = document.querySelector('nav')
    burger.addEventListener("click", function () {
        console.log('burger læst')
        nav.classList.toggle("show")
    })
}

// ************************************************* VALIDATOR ***************************************************************

function validater() {

        document.querySelector('#send').addEventListener('click', (event) => {
            // var hide = document.getElementById('hide');
            document.getElementById("#send").submit();
            event.preventDefault();
            let name = document.querySelector('#name');
            let topic = document.querySelector('#topic');
            let besked = document.querySelector('#msg');
            
            if (name.value == "" || topic.value == "" || besked.value == "") {
                alert('udfyld de makeret felter')
                nameEvent();
                topicEvent();
                msgEvent();
                
            } else if ((name.value = true || topic.value == true || besked.value == true )){
                alert('tak')
                
            }
            
            return true
            console.log('event ok');
        });

        // Valider name -----------------------------------------------------------------------00

        document.querySelector("#name").addEventListener("focusout", event => {
            console.log('nameevent')
            nameEvent();
        })
        function nameEvent() {
            // console.log('event ok')
            console.log('hallo world')


            let name = document.querySelector('#name');
            let placeholder = document.querySelector('.from');
            if (name.value == "") {
                console.log('Missing name')
                // Hivs der ikke findes en stjerne:
                if (name.nextElementSibling == null) {
                    let span = document.createElement('SPAN');
                    let spanstjerne = document.createTextNode('*')
                    span.classList.add('valider_01')
                    span.appendChild(spanstjerne)
                    placeholder.appendChild(span)
                    span.style.color = "red"
                }
            } else {
                let fjernstjerne = name.nextElementSibling

                console.log("Name is OK")
                fjernstjerne.remove();
            }


        }

        // Valider TOPIC ------------------------------------------------------------------

        document.querySelector("#topic").addEventListener("focusout", event => {
            // console.log('event ok')
            topicEvent();

        });
        function topicEvent() {
            let topic = document.querySelector('#topic');
            let placeholder = document.querySelector('.subject');
            if (topic.value == "") {
                // Hivs der ikke findes en stjerne:
                if (topic.nextElementSibling == null) {
                    console.log('Missing topic')
                    let span = document.createElement('SPAN');
                    let spanstjerne = document.createTextNode('*')
                    span.classList.add('valider_01')
                    span.appendChild(spanstjerne)
                    placeholder.appendChild(span)
                    span.style.color = "red"
                }
            } else {
                let fjernstjerne = topic.nextElementSibling
                console.log('topic is OK')
                fjernstjerne.remove();
            }
        }

        // Valider msg ----------------------------------------------------------------------

        document.querySelector("#msg").addEventListener("focusout", event => {
            msgEvent();
            // console.log('event ok')
        })
        function msgEvent() {
            let msg = document.querySelector('#msg');
            let placeholder = document.querySelector('.message');
            if (msg.value == "") {
                // Hivs der ikke findes en stjerne:
                if (msg.nextElementSibling == null) {
                    console.log('Missing message')
                    let span = document.createElement('SPAN');
                    let spanstjerne = document.createTextNode('*')
                    span.classList.add('valider_01')
                    span.appendChild(spanstjerne)
                    placeholder.appendChild(span)
                    span.style.color = "red"
                }
            } else {
                let fjernstjerne = msg.nextElementSibling
                console.log('Message OK')
                fjernstjerne.remove();
            }
        }
}