const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", () => {
  let fontSize = input.value; // atribuie valoarea input-ului
  console.log(fontSize);
  text.style.fontSize = `${fontSize}px`;
  // console.log(`${fontSize}px`);
});
