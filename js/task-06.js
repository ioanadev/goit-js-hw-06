const input = document.querySelector("#validation-input");
input.addEventListener("blur", validateInput);

function validateInput() {
  // functia callback
  const value = input.value;
  console.log(value); // afiseaza caracterele introduse in input
  console.log(value.length); // afiseaza lungimea caracterelor introduse in input
  const dataLength = input.getAttribute("data-length");
  console.log(dataLength); // afiseaza data-length
  if (value.length >= dataLength) {
    // daca lungimea caracterelor introduse >= cu data-lengt
    input.classList.add("valid"); //adauga clasa valid la input
  } else {
    input.classList.add("invalid"); // adauga clasa invalid la input
  }
}
