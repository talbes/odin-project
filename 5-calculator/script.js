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

function operate(operand1, operand2, operator) {
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

let buttons = document.querySelectorAll(".button:not(.inactive)");
buttons.forEach( 
    b => {
        b.addEventListener('click', e => clickButton(e) );
        b.addEventListener('mouseenter', e => e.target.classList.add("mouse-over"));
        b.addEventListener('mouseleave', e => e.target.classList.remove("mouse-over"));
    });

let calculationTerm = "";
let operand1 = "", operand2 = "", operator = "";
let display = document.querySelector(".display");
let locked = false;

function clickButton(e) {
    let t = e.target;
    console.log(`You clicked button ${t.textContent}`);
    if(locked === true) {
        t.textContent === "AC" ? clearAndUnlock(t) : display.value = "PRESS AC";
    } else {
        if(t.className.includes("digit")) {
            digitAction(t);
        } else if(t.className.includes("operator")) {
            operatorAction(t);
        } else console.log("error in selction of button");
    }
    console.log(`Current calculation term: ${calculationTerm}`);
    console.log(`Current ops: ${operand1}, ${operator}, ${operand2}`);
}

function clearAndUnlock(t) {
    calculationTerm = ""; operand1= ""; operand2 = ""; operator = "";
    display.value = calculationTerm;
    locked = false;
}

function digitAction(t) {
    calculationTerm === "0" ? calculationTerm = t.textContent : calculationTerm += t.textContent;
    display.value = calculationTerm;
    if(operator === "") {
        operand1 += t.textContent;
    } else {
        operand2 += t.textContent;
    }
}

function operatorAction(t) {
    if(t.textContent === "AC") {
        clearAndUnlock(t);
    } else if (t.textContent === "="){
        if(operand1 !== "" && operator !== "" && operand2 !== "") {
            let a = parseFloat(operand1), b = parseFloat(operand2);
            let result;
            switch(operator) {
                case "+": 
                    result = add(a, b);
                    break;
                case "-": 
                    result = subtract(a, b);
                    break;
                case "*":
                    result = multiply(a, b);
                    break;
                case "/":
                    result = divide(a, b);
                    break;
            }
            display.value = result;
            locked = true;

        } else console.log("operand/operator missing")
    } else { // operator +-*/
        if(calculationTerm !== "") { // no operator at beginning
            if(operator !== "" && operand2 === "") { // there is already an operator i.e. we are looking for the 2nd operand
                calculationTerm = calculationTerm.slice(0,-1);
            }
            if(operator === "" || operand2 === "") { // no operator after finished calculationterm
                operator = t.textContent;
                calculationTerm += t.textContent;
            }
            display.value = calculationTerm;
        }
    }
}