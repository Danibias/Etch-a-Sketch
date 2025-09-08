// Canvas design
const grid = document.querySelector(".grid");

// Hover effect 
grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.background = "black";
  }
}); 

// Create a new grid layout
const layout = document.querySelector(".layout");

// Clamps the size of the grid between 1 and 100
const clampSize = (num) => {
  const randomNum  = parseInt(num, 10);
  if (Number.isNaN(randomNum)) return null;
  return Math.max(1, Math.min(100, randomNum));
}

const newGrid = (size) => {
  grid.innerHTML = ""; // Remove the previous grid

// Creates a new grid and resizes cells within
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.flex = `0 0 calc(100% / ${size})`;
    grid.appendChild(cell);
  }
}

layout.addEventListener("click", (e) => {
  const input = prompt("Enter new grid size (e.g. 16 for '16x16'), but no more than 100:");
  if (input === null) return;
  const size = clampSize(input);
  if(!size) return alert("Enter a number between 1 and 100.");
  newGrid(size);

});

newGrid(16);