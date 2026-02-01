let email = document.querySelector("#email");
let password = document.querySelector("#password");

let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector(".error-email").textContent = "";
    document.querySelector(".error-password").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

   if(!emailans){
    document.querySelector(".error-email").textContent = "Email is incorrect";
    isValid = false;
   }
   if(!passwordans){
    document.querySelector(".error-password").textContent = "Password is incorrect";
    isValid = false;
   }
   if(isValid){
     document.querySelector("#result_message").textContent = "Everything is correct";
   }

});