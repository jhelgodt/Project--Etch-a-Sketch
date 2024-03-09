const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "black"; // change this to any color you want
  });
  container.appendChild(div);
}
