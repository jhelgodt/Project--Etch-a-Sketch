const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

function createGrid(size) {
  container.style.width = "640px";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.width = `${640 / size}px`;
    div.style.height = `${640 / size}px`;
    div.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Initialize with transparent color
    div.dataset.alpha = 0; // Initialize alpha value

    div.addEventListener("mouseover", function () {
      // Generate random RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Increase alpha by 10% (0.1), but not more than 1
      div.dataset.alpha = Math.min(parseFloat(div.dataset.alpha) + 0.1, 1);

      // Set the background color with the new RGB values and alpha
      div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${div.dataset.alpha})`;
    });

    container.appendChild(div);
  }
}

resetButton.addEventListener("click", function () {
  let size = prompt(
    "Enter the number of squares per side for the new grid (max 100)",
    "16"
  );
  size = Math.min(Math.max(parseInt(size), 1), 100); // Ensure size is between 1 and 100

  // Remove all child elements from the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Create a new grid
  createGrid(size);
});

// Create initial 16x16 grid
createGrid(16);
