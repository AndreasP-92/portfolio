document.addEventListener("DOMContentLoaded", function(event) {
    console.log(document);
    console.log(document.documentElement);
    console.log(document.body);
    console.log(document.body.firstElementChild);
    console.log(document.body.firstElementChild.nextElementSibling);
    console.log(document.body.firstElementChild.nextElementSibling.nextElementSibling);  
    for (i=0; i<document.body.childNodes.length; i++){
        console.log(document.body.childNodes[i]);
    }
  });