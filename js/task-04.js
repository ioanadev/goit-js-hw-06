let counterValue = document.querySelector("#counter");
let value = document.querySelector("#value");
counterValue = 0;

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
console.log(decrementBtn.dataset.action);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
console.log(incrementBtn.dataset.action);

const handleClickDec = event => {
  console.log(event);
  counterValue -= 1;
  console.log(counterValue);
  value.textContent = counterValue;
};

const handleClickInc = event => {
  console.log(event);
  counterValue += 1;
  console.log(counterValue);
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleClickDec);
incrementBtn.addEventListener("click", handleClickInc);
