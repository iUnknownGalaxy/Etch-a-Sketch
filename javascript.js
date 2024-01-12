const container = document.getElementById("container");

const CONTAINER_WIDTH = 800;
let boxAmount = 16;

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function createGrid(boxAmount) {
    clearBox("container");
    while(boxAmount > 100) {
        boxAmount = prompt("Too big! Please enter a smaller number up to 100:")
    }
    while(boxAmount < 4) {
        boxAmount = prompt("Too small! Please enter a number greater than 3 and up to 100:")
    }
    boxSize = CONTAINER_WIDTH / boxAmount;
    for(let i = 1; i <= boxAmount * boxAmount; i++) {
        const div = document.createElement("div");
        div.style = `height: ${boxSize}px; width: ${boxSize}px;`
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "blue";
        })
    }
}

container.style = "display: flex; flex-wrap: wrap;border-style: solid; border-width: 5px; border-color: red;";
createGrid(boxAmount);


const buttonContainer = document.getElementById("button-container");
const button = document.createElement("button");
button.textContent = "Grid size";
button.addEventListener('click', () => {
    boxAmount = prompt("How many boxes across? (max is 100 boxes across):");
    createGrid(boxAmount);
})
buttonContainer.appendChild(button);