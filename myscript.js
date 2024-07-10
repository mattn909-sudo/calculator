let valueA = '';
let valueB = '';
let operator = '';
let perfNextOp = false;
let screenText ='';
const allButtons = document.querySelector('.calcContainer');
const screen = document.querySelector(".screenRow");

allButtons.addEventListener('click',(event) => {
    let target = event.target;
    if(target.tagName == 'BUTTON'){
        screenText += target.textContent;
        screen.textContent = screenText;
    }
    
})
function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function multiply(a,b){
    return a * b;
}

function operate(a, b, op){
    switch(op){
        case '+':
            return add(a, b);
        case '-': 
            return sub(a, b);
        case '*': 
            return multiply(a, b);
        case '/': 
            return divide(a, b);
    }
}