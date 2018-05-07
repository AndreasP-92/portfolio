document.addEventListener('DOMContentLoaded', function (event) {
    //  nameEvent();
    //  mailEvent();

    document.querySelector('#send').addEventListener('click', (event) => {
        // var hide = document.getElementById('hide');
        console.log('event ok');
        event.preventDefault();
        let name = document.querySelector('#name');
        let mail = document.querySelector('#mail');
        let besked = document.querySelector('#msg');

        if (name.value == "" || mail.value == "" || besked.value == "") {
            alert('udfyld de makeret felter')
            nameEvent();
            mailEvent();
            msgEvent();

        } else {

        }
        return false
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
        let placeholder = document.querySelector('#name_02');
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

    // Valider mail ------------------------------------------------------------------

    document.querySelector("#mail").addEventListener("focusout", event => {
        // console.log('event ok')
        mailEvent();

    });
    function mailEvent() {
        let mail = document.querySelector('#mail');
        let placeholder = document.querySelector('#mail_02');
        if (mail.value == "") {
            // Hivs der ikke findes en stjerne:
            if (mail.nextElementSibling == null) {
                console.log('Missing mail')
                let span = document.createElement('SPAN');
                let spanstjerne = document.createTextNode('*')
                span.classList.add('valider_01')
                span.appendChild(spanstjerne)
                placeholder.appendChild(span)
                span.style.color = "red"
            }
        } else {
            let fjernstjerne = mail.nextElementSibling
            console.log('mail is OK')
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
        let placeholder = document.querySelector('#msg_02');
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
});
