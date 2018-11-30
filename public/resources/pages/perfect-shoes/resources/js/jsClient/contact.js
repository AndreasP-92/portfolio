(function(){
    thankyou();
})();

function thankyou (){
    let form        = $('#contactForm');
    let formSubmit  = document.getElementById('contactForm');

    $('#submitButton').click(function(event){

        form[0].checkValidity();
        form[0].reportValidity();
  
        if(form[0].reportValidity() == true){
            $('#thankyou').html('<p style="min-height:550px;">Thank you for your interrest, you will hear from us soon.</p>')
            $('.contact-section').html('')

            document.body.appendChild(formSubmit);

             setTimeout(function(){ 
                formSubmit.submit()
                console.log('submit')
            }, 3000);

        }

        event.preventDefault();
    })
}