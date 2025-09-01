// canvas design

const grid = document.querySelector(".grid");

// 16 x 16 default grid
for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}



