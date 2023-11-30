let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

const inputHandler = (e) =>{
let value = e.target.value;
nameOutput.textContent = value||"Anonymous";   
};

nameInput.addEventListener('input', inputHandler);