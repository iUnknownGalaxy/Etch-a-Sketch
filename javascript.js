const container = document.getElementById("container");
for(let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.style = "height: 50px; width: 50px;"
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "blue";
    })
}

container.style = "display: flex; flex-wrap: wrap;";
