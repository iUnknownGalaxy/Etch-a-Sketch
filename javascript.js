const container = document.getElementById("container");
for(let i = 1; i <= 16; i++) {
    const div = document.createElement("div");
    div.style = "width: 10px; height: 10px";
    container.appendChild(div);
    for(let i = 1; i <= 16; i++) {
        const divChild = document.createElement("div");
        divChild.style = "width: 10px; height: 10px";
        div.appendChild(divChild);
    }
    
}

container.style = "display: flex";