function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

// input.addEventListener("input", () => {
//   let nrBoxes = input.value; // atribuie valoarea input-ului
//   console.log(nrBoxes);
// });
// createBtn.addEventListener("click", function (number) {
//   const divElement = document.createElement("div");
//   divElement.setAttribute("#boxes");
//   boxes.append(divElement);
//   console.log(divElement);
// });
createBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});
function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxes.appendChild(box);
    boxSize += 10;
  }
}
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
function destroyBoxes() {
  boxes.innerHTML = "";
}
