var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});


let name = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("message")
let submit = document.getElementById("submit")

submit.addEventListener("click", function() {

    console.log ("Name: " + name.value + ", " + " E-mail: " + email.value + " Message: " + message.value)
})