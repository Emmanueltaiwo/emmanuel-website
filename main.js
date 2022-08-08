let orderCounter = document.getElementById("order-counter")

let count = 0

function increase(){
    orderCounter.textContent = count+= 1
}

function reduce(){
    orderCounter.textContent = count-= 1
}


function save() {
    alert("You will be given related Products for your specific age") 
}

console.log(count)

