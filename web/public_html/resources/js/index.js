(function () {
    // fadeOutEffect();
    slideEffect();
    phone();
})()

//************************************************* FADEOUT EFFEKT *********************************************************

function fadeOutEffect() {
    document.getElementById("forside").addEventListener('click', fadeOutEffect => {
        var fadeTarget = document.getElementById("forside");
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
}

//************************************************* SLIDE EFFEKT *********************************************************

function slideEffect() {
    document.getElementById("forside").addEventListener('click', fadeOutEffect => {
        var element = document.getElementById('forside')
        element.classList.toggle("hide")
    });
};
// ************************************************* PHONE NUMBER *********************************************************
function phone (){
    document.getElementById('phone').addEventListener('click',event=>{
        alert('28 88 81 92')
    })
}

    