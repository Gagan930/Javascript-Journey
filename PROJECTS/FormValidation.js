// 1️⃣ Modify this project to show green messages when input is valid.
// 2️⃣ Add validation for a phone number field (should allow only numbers).
// 3️⃣ Let me know when you’re done, and we’ll move on to LocalStorage & SessionStorage in JavaScript!



document.getElementById("signup-form").addEventListener("submit",function(event){
    let isvalid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmpassword = document.getElementById("confirmpassword");

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let confirmpasswordError = document.getElementById("confirmpassword-error");

    nameError.textContent = "";
    emailError.textContent ="";
    passwordError.textContent = "";
    confirmpasswordError.textContent = "";
    
    if(name.value.trim()===""){
        nameError.textContent = "Name is required";
        isvalid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email.value)){
        emailError.textContent = "Email is not valid";
        isvalid = false;
    }

    if(password.value.length < 8){
        passwordError.textContent = "Password should be at least 8 words";
        isvalid = false;
    }

    if(password.value!== confirmpassword.value){
        confirmpasswordError.textContent = "Passwords do not match";
        isvalid = false;
    }


    event.preventDefault();// stops the form from submitting
});