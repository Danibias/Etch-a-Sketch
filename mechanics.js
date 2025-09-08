// Canvas design
const grid = document.querySelector(".grid");

// 16 x 16 default grid
for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
};

// Hover effect 
grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.background = "black";
  }
}); 

// Create a new grid layout
const layout = document.querySelector(".layout");
layout.addEventListener("click", (e) => {
    const size = prompt("Enter new grid size (e.g. 16 for 16x16), but no more than 100:");
    if (size !== null && !isNaN(size)) {
        grid.innerHTML = ""; // Clear the actual grid
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
        }
    };
});
