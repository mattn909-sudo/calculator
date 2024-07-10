let valueA = '';
let valueB = '';
let operator = '';
let perfNextOp = false;
let readyToEquate = false;
let screenText ='';
const NUMERICAL = '1234567890'
const OPERATOR = '+-/*'
const allButtons = document.querySelector('.calcContainer');
const screen = document.querySelector(".screenRow");

allButtons.addEventListener('click',(event) => {
    selected = event.target.textContent;
    if(NUMERICAL.includes(selected)){
        if(perfNextOp && valueB.length < 9){
            valueB += selected;
            screenText = valueB;
            readyToEquate = true;
        }
        else if(valueA.length < 9){
            valueA += selected;
            screenText = valueA;
        }
    }
    else if(OPERATOR.includes(selected)){
        if(perfNextOp){
            valueA = operate(valueA, valueB, selected);
            valueB = '';
            screenText = valueA;
        }
        else{
            operator = selected
            perfNextOp = true;
        }
    }
    else if(selected == '=' && perfNextOp && readyToEquate){
        valueA = operate(valueA, valueB, operator);
        screenText = valueA;
        valueB = '';
    }
    else if(selected == 'AC'){
        valueA = '';
        valueB = '';
        operator = '';
        screenText = '';
        perfNextOp = false;
        readyToEquate = false;
    }
    screen.textContent = screenText;

});
function add(a, b){
    return (a + b).toString();
}

function sub(a, b){
    return (a - b).toString();
}

function divide(a, b){
    return (a / b).toString();
}

function multiply(a,b){
    return (a * b).toString();
}

function operate(a, b, op){
    let intA = Number(a);
    let intB = Number(b);
    switch(op){
        case '+':
            return add(intA, intB);
        case '-': 
            return sub(intA, intB);
        case '*': 
            return multiply(intA, intB);
        case '/': 
            return divide(intA, intB);
    }
}