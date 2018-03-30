(function () {
    // fadeOutEffect();
    slideEffect();
    burger();
    ieDetection();
    // alert('IE ' + detectIE());
})()

// ******************************************** INTERNET EXPLORER DETECTION ************************************************

function ieDetection (){
    var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if ( ms_ie ) {
        alert('WARMING! You are using Internet Explorer, feautres might not work with the out-dated browser. For an optimal user experence use a newer version such as Google Chrome, Firefox, or Microsoft Edge.')
    }
}

//************************************************* FADEOUT EFFEKT *********************************************************

function fadeOutEffect() {
    document.getElementById("frontPage").addEventListener('click', function(fadeOutEffect) {
        var fadeTarget = document.getElementById("frontPage");
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity < 0.1) {
                clearInterval(fadeEffect);
            } else {
                fadeTarget.style.opacity -= 0.1;
            }
        }, 200);
    });
};

// ************************************************ BURGER MENNU *********************************************************

function burger (){
    var burger = document.querySelector('#burger')
    var nav = document.querySelector('nav')
    burger.addEventListener("click", function(){
        console.log('burger læst')
        nav.classList.toggle("show")
    })
}

//************************************************* SLIDE EFFEKT *********************************************************

function slideEffect() {
    document.getElementById("frontPage").addEventListener('click', function(fadeOutEffect) {
        var element = document.getElementById('frontPage')
        element.classList.toggle("hide")
        var scrollStop = document.querySelector('body')
        scrollStop.classList.remove("stop_scroll")
        console.log("slide igang")
    });
};
// ************************************************* PHONE NUMBER *********************************************************
function phone (){
    document.getElementById('phone').addEventListener('click',function(event){
        alert('Telefon: 28 88 81 92')
    })
}

    