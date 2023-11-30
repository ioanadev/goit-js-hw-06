const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
for(const item of items){
    const categories = item.querySelector("h2");
    console.log(`Category: ${categories.textContent}`);
    const elementList = item.querySelector("ul");
    const element =elementList.querySelectorAll("li");
    console.log(`Elements: ${element.length}`);
}