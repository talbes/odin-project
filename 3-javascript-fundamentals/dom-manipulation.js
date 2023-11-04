const testingDom = document.querySelector("body");

const newHeading = document.createElement("h3");
newHeading.textContent = "I'm a blue h3!"
newHeading.setAttribute("style", "color: blue");
newHeading.setAttribute("id", "newH");
testingDom.insertAdjacentElement('beforeend',newHeading);

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

// Shopping list
let addItemBtn = document.querySelector("#btn-add-to-cart");
let itemToAdd = document.querySelector("#item");
addItemBtn.addEventListener('click', addToList);
let shoppingList = document.querySelector("#shopping-cart");

function addToList() {
    let newItem = document.createElement("li");
    newItem.textContent = itemToAdd.value;

    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Remove";
    cancelButton.style.marginLeft = "1rem";
    newItem.appendChild(cancelButton);
    
    itemToAdd.value = "";

    shoppingList.appendChild(newItem);
    cancelButton.addEventListener('click', () => shoppingList.removeChild(newItem));
}