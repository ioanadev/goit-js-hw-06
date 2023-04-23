const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); //previne reincarcarea
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    //daca campurile cu email si passord sunt goale
    alert("Toate campurile trebuie completate!"); // se va afisa alera
  }
  const formData = {}; //creem un obiect in care vor fi stocate valorile campurilor
  formData.email = form.elements.email.value; //incrementam primul element al obiectului
  formData.password = form.elements.password.value; //incrementam al doilea element al obiectului
  console.log(formData); // afisam obiectul
  event.currentTarget.reset();
}
