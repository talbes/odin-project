const testingDom = document.body.querySelector("h2");

const newHeading = document.createElement("h3");
newHeading.textContent = "I'm a blue h3!"
newHeading.setAttribute("style", "color: blue");
newHeading.setAttribute("id", "newH");
testingDom.insertAdjacentElement('afterend',newHeading);

const newPara = document.createElement("p");
newPara.textContent = "Hey I'm red!";
newPara.style.color = 'red';
newPara.id = "newP";

document.querySelector("#newH").insertAdjacentElement('afterend', newPara);

const newDiv = document.createElement("div");
newDiv.id = "newDiv";
document.querySelector("#newP").insertAdjacentElement('afterend', newDiv);

const anotherP = document.createElement("p");
const anotherD = document.createElement("div");
document.querySelector("#newDiv").appendChild(anotherP);
document.querySelector("#newDiv").appendChild(anotherD);
anotherP.textContent = "I'm a p";
anotherD.textContent = "I'm a d";