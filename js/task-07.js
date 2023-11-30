const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


input.addEventListener('input', ()=>{
    let textFontSize = input.value;
    text.style.fontSize = `${textFontSize}px`
})