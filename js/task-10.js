function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")
const numberInput = document.querySelector("input");



const createBoxes = (amount) =>{
  let boxSize = 30;

  for (let i=1; i<=amount; i++) {
  const box = document.createElement("div");
  box.style.backgroundColor = getRandomHexColor();
  box.style.height = `${boxSize}px`;
  box.style.width = `${boxSize}px`;
  boxes.append(box);
  boxSize +=10;

  }

}

const handleClick = () =>{
  // console.log(numberInput.value);
  let amount = numberInput.value;
  createBoxes(amount);

}

createBtn.addEventListener('click', handleClick);


const destroyBoxes = () =>{
boxes.innerHTML = "";
}

destroyBtn.addEventListener('click', destroyBoxes)