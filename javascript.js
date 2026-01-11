const gridContainer = document.querySelector("#gridContainer");

let gridSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-size'));

function createBox(){
    const box = document.createElement("div");
    box.classList.add("square_div");

    gridContainer.appendChild(box);
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "blue"
    })
}

function createGrid(){
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            createBox();
        }
    }
}

createGrid();

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clear();
})

function clear(){
    gridContainer.replaceChildren();
    createGrid();
}

const updateGrid = document.querySelector("#grid");

updateGrid.addEventListener("click", () => {
    let newGridSize;
    
    do{
        newGridSize = prompt(`Current Grid Size: ${gridSize}\nChoose new grid size (max 100): `);
        
        if (newGridSize === null) {
            return;
        }
        if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
        }
    }while(isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100)

    gridSize = parseInt(newGridSize);
    document.documentElement.style.setProperty('--grid-size', gridSize);
    
    clear();
})
