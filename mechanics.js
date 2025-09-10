// Canvas design
const grid = document.querySelector(".grid");
const layout = document.querySelector(".layout");

/**
 * Hover Effects
 */

//Default Black
let mode = "black";
let darken = false;

//RGB Mode
const random255 = () => Math.floor(Math.random() * 256);
const randomRGB  = () => `rgb(${random255()}, ${random255()}, ${random255()})`;

const painter = (cell) => {
  if (darken) {
    //darken in 10 steps
    cell.passes = (cell.passes || 0) +1;
    if (cell.passes > 10) cell.passes = 10;

    const lightness = 100 - cell.passes * 10; // 100 => 0 in %

    // grayscale
    if (mode === "black") {
      cell.style.backgroundColor = `hsl(0 0% ${lightness}%)`;
    
    } else if (mode === "rgb") {
        if (cell.hue == null) cell.hue = Math.floor(Math.random() * 360);
        const s = 80; //saturation
        cell.style.backgroundColor = `hsl(${cell.hue} ${s}% ${lightness}%)`;
    }
  } else {
    if (mode === "black") {
      cell.style.backgroundColor = "black";
    } else if (mode === "rgb") {
      cell.style.backgroundColor = randomRGB();
    }
  }
}

grid.addEventListener("mouseover", (e) => {
  if(!e.target.classList.contains("cell")) return;
  painter(e.target);
});


document.querySelector(".black").addEventListener("click" , () => {
  mode = "black";
});

document.querySelector(".rgb").addEventListener("click", () => {
  mode = "rgb";
});

document.querySelector(".darken").addEventListener("click", () => {
  darken =!darken;
});

//Clear 
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  grid.querySelectorAll(".cell").forEach(cell => cell.style.background = "");
  // reset to default mode
  mode = "black";
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

newGrid(16);

