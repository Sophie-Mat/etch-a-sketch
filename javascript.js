const gridContainer = document.querySelector("#gridContainer");

const OPACITY_INCREMENT = 0.1;
const MAX_GRID_SIZE = 100;
const DEFAULT_COLOR = "black";
const ERASER_COLOR = "white";

let boxColor = DEFAULT_COLOR;
let selectedTool = "pen";

let gridSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-size'));

function createBox(){
    const box = document.createElement("div");
    box.classList.add("square_div");
    box.opacity = 0;

    gridContainer.appendChild(box);
    
    box.addEventListener("mouseover", () => {
        handleBoxHover(box);
        colorize(box);
    });
}

function handleBoxHover(box) {
    if (selectedTool === "brush") {
        box.opacity += OPACITY_INCREMENT;
    } else if (selectedTool === "eraser") {
        box.opacity = 0;
    }
}

function colorize(box){
    if (selectedTool === "brush") {
        box.style.backgroundColor = `rgba(0, 0, 0, ${box.opacity})`;
    } else {
        box.style.backgroundColor = boxColor;
    }
}

function createGrid(){
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            createBox();
        }
    }
}

createGrid();

function selectTool(tool, color) {
    selectedTool = tool;
    boxColor = color;
}

document.querySelector("#pen").addEventListener("click", () => selectTool("pen", DEFAULT_COLOR));
document.querySelector("#brush").addEventListener("click", () => selectTool("brush", DEFAULT_COLOR));
document.querySelector("#eraser").addEventListener("click", () => selectTool("eraser", ERASER_COLOR));

document.querySelector("#clear").addEventListener("click", clear);

function clear(){
    gridContainer.replaceChildren();
    createGrid();
}

function isValidGridSize(size) {
    return !isNaN(size) && size >= 1 && size <= MAX_GRID_SIZE;
}

function updateGridSize() {
    let newGridSize = prompt(`Current Grid Size: ${gridSize}\nChoose new grid size (max ${MAX_GRID_SIZE}): `);
    
    if (newGridSize === null) return;
    
    if (!isValidGridSize(newGridSize)) {
        alert(`Please enter a valid number between 1 and ${MAX_GRID_SIZE}.`);
        return updateGridSize();
    }
    
    gridSize = parseInt(newGridSize);
    document.documentElement.style.setProperty('--grid-size', gridSize);
    clear();
}

document.querySelector("#grid").addEventListener("click", updateGridSize);
