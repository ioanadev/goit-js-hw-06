let counterValue = document.getElementById('counter');
counterValue = 0;
let value = document.getElementById('value');

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');


const decrementClickHandler = (e)=>{
    counterValue-=1;
    value.textContent = counterValue;
}
const incrementClickHandler = (e)=>{
    
    counterValue+=1;
    value.textContent = counterValue;
}

decrementButton.addEventListener('click', decrementClickHandler);

incrementButton.addEventListener('click', incrementClickHandler);
