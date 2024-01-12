const container = document.getElementById("container");

const CONTAINER_WIDTH = 800;
boxAmount = prompt("How many boxes?");
boxSize = CONTAINER_WIDTH / boxAmount;
for(let i = 1; i <= boxAmount * boxAmount; i++) {
    const div = document.createElement("div");
    div.style = `height: ${boxSize}px; width: ${boxSize}px;`
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "blue";
    })
}
container.style = "display: flex; flex-wrap: wrap;border-style: solid; border-width: 5px; border-color: red;";
