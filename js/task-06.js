const validationInput = document.getElementById('validation-input');

const blurHandler = (e) =>{
console.dir(e);
// console.log(e.target.value);
let value = e.target.value;
console.log(value.length)
console.log(e.srcElement.attributes[2].nodeValue);
const validationLength = e.srcElement.attributes[2].nodeValue;

if(value.length >= validationLength){
  validationInput.classList.add('valid');
   }else{
  validationInput.classList.add('invalid');
     }
}

validationInput.addEventListener('blur', blurHandler);