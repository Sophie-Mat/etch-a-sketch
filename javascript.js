const container = document.querySelector("#container");

function createDiv(){
    const div = document.createElement("div");
    div.classList.add("square_div");

    container.appendChild(div);
}

function createGrid(){
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            createDiv();
        }
    }
}
createGrid();