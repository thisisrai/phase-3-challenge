//global variables to keep track of count, item, price, and total
let count = 0
let itemArr = []
let priceArr = []
let total = 0

//function to add items
let addCart = (object, price) => {
    itemArr.push(object)
    priceArr.push("$"+price)
    total += price
    count ++
    document.getElementById("cart-item-count").innerHTML = `(${count})`
}

//to render list
let listCreator = () => {
    document.getElementsByClassName('modallist')[0].innerHTML = ""
    document.getElementsByClassName('modallist2')[0].innerHTML = ""
    let container = document.getElementsByClassName('modallist')[0]
    let container2 = document.getElementsByClassName('modallist2')[0]
    for(let i = 0; i < itemArr.length; i++) {
        const li = document.createElement("li")
        const li2 = document.createElement("li")
        li.innerText = itemArr[i]
        li2.innerText = priceArr[i]
        container.appendChild(li)
        container2.appendChild(li2)
    }
}

let totalFunction = () => {
    document.getElementsByClassName("total-price")[0].innerHTML = `Total $${total.toFixed(2)}`
}

//for modal clear button
let clearItem = () => {
    count = 0
    document.getElementById("cart-item-count").innerHTML = `(${count})`
    itemArr = []
    priceArr = []
    total = 0
    modal.style.display = "none"
}

// Modal stuff
let modal = document.getElementById('myModal');
let modalBtn = document.getElementById("cart-button");
let span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function() {
    modal.style.display = "block"
    listCreator()
    totalFunction()
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}
// End of Modal