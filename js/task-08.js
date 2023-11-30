const form = document.querySelector('.login-form');

const handleSubmit = (event) =>{
event.preventDefault();

const {
    elements:{email, password} 
      }= event.currentTarget;

     if(email.value === "" || password.value === "" ){
        alert("All fields must be completed!");
        return;
     }

const formData = {};
formData.email = email.value;
formData.password = password.value;

console.log(formData);
form.reset();
}


form.addEventListener('submit', handleSubmit);