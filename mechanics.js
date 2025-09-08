// Canvas design
const grid = document.querySelector(".grid");
const layout = document.querySelector(".layout");
const clear = document.querySelector(".clear")

// Hover effect 
grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.background = "black";
  }
});

// Remove the previous grid
const newGrid = (size) => {
grid.replaceChildren(); 

// Creates a new grid and resizes cells within
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.flex = `0 0 calc(100% / ${size})`;
    grid.appendChild(cell);
  }
}

// New grid layout
layout.addEventListener("click", () => {
  const input = prompt("Enter new grid size (e.g. 16 for '16x16'), but no more than 100:");
  if (input === null) return;  // user canceled

  const value = parseInt(input, 10);

  // Reject non-numbers
  if (Number.isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  // Reject out-of-range
  if (value < 1 || value > 100) {
    alert("Enter a number between 1 and 100.");
    return;
  }

  // If valid, build new grid
  newGrid(value);
});

// Clear the grid
const clearGrid = () => {
  const cells = grid.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.background = "";
  });
};

clear.addEventListener("click", clearGrid)

newGrid(16);

