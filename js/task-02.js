const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");
console.log(list);
for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add("item");
  list.appendChild(item);
  console.log(item);
}
