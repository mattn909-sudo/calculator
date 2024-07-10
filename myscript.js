let valueA = 0;
let valueB = 0;
let operator = '';
let perfNextOp = false;

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