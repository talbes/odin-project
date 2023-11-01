const btn = document.getElementById("btn1");
btn.addEventListener("click", msgme);
var lastElement = document.getElementById("append-me");

function msgme() {
    console.log('Hello, world! From external script.')
    let myName = prompt("Type you name:");
    alert('Hello, ' + myName + '! This is executed from an external script.');

    const para = document.createElement("p");
    para.textContent = `${myName} clicked me.`;
    lastElement.appendChild(para);
}

const fld = document.getElementById("fld");
const prgf = document.getElementById("type-me");
fld.addEventListener("keydown", (event) => { console.log(event.key); prgf.textContent = `You typed '${event.key}'`; } );