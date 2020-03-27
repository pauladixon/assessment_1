

let currentNumber;

let counter = document.getElementById("counter");
let inputNumber = document.querySelector("input");

document.getElementById("plus").onclick = addNumber;
document.getElementById("minus").onclick = subtractNumber;


function init(){
    inputNumber.value = 1;
    currentNumber = 0;
    render();
}

function render(){
    if (currentNumber < 0){
        counter.style.color = "red";
    } else counter.style.color = "black";
    counter.innerHTML = currentNumber;
}

function addNumber() {
    currentNumber = currentNumber + Math.floor(inputNumber.value);
    render();
}

function subtractNumber() {
    currentNumber = currentNumber - Math.floor(inputNumber.value);
    render();
}

init()