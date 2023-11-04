let container = document.querySelector(".grid-container");

let gridSize = 4;
setUpGrid(gridSize);

function setUpGrid(gridSize) {
    for(let item = 0; item < gridSize**2; ++item) {
        let itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "grid-item uncolored");
        itemDiv.setAttribute("id", `item-${item+1}`);
        
        container.appendChild(itemDiv);
    }
    container.setAttribute("style",`grid-template-columns: repeat(${gridSize}, minmax(10px, 50px)); grid-template-rows: repeat(${gridSize}, minmax(10px, 50px))`);
    document.querySelectorAll(".grid-item")
            .forEach( i => {
                i.addEventListener('mouseenter', (e) => {e.target.className='grid-item colored'});
                i.addEventListener('mouseleave', (e) => {e.target.className='grid-item uncolored'});
            });
    let reset = document.querySelector("#reset");
    reset.addEventListener('click', resetBoard);
}

function resetBoard() {
    gridSize = prompt("Choose a new grid size. Must be smaller than 100.");
    gridSize > 100 ? alert("SMALLER THAN 100!") : setUpGrid(gridSize);
}
