const container = document.getElementById("container");
for(let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
}

container.style = "display: flex";