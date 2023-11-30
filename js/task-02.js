const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const unorderedList = document.querySelector("#ingredients");
for (const ingredient of ingredients){
const ingredientsList = document.createElement("li");
ingredientsList.textContent = ingredient;
ingredientsList.classList.add("item");
console.log(ingredientsList);
unorderedList.appendChild(ingredientsList)
}