let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let submit = document.getElementById("submit")

submit.addEventListener("click", function() {
    alert(`
    Welcome ${name.value}, to Luvable Baby Store, 
    Feel free to explore around and shop all day, 
    Please remember your password (${password.value} )`)
})