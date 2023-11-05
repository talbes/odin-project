function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

let operatorSelection = Array.of("+", "-", "*", "/");

function operate(operand1, operand2, operator) {
    //if(!operatorSelection.includes(operator)) console.log(` unknown operator: ${operator}`);
    let result;
    switch(operator) {
        case "+":
            result = add(operand1, operand2);
            break;
        case "-":
            result = subtract(operand1, operand2);
            break;
        case "*":
            result = multiply(operand1, operand2);
            break;
        case "/":
            result = divide(operand1, operand2);
            break;
        default:
            console.log(`unknown operator: ${operator}`);
    }
    return result;   
}