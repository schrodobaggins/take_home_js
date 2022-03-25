//   SingleStore New Grad Hiring Challenge
//   Michael Schroeder
//   3/24/2022
'use strict'

const form = document.querySelector("#form");
const emailInput = document.querySelector(".emailInput");
const emailSubEl = document.querySelector(".emailSub");

if(form){
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const checked = document.querySelector('input[value="1"]:checked');
    if (checked) {
        const value = checked.value;
        window.location.pathname = "unqualified.html";
        // redirect using the value
        return window.location.pathname = "unqualified.html";;
    }
});
}

// form validation for proper email format using js regex
function validateEmail(inputText) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if(inputText.match(mailFormat)){
       const bannedEmails  = ['@yahoo.com','@gmail.com','@hotmail.com'];
       const doesHaveBannedEmail = bannedEmails.some((nonWorkEmail) => inputText.includes(nonWorkEmail));

       if (doesHaveBannedEmail) {
        return {error: true, msg: "Please make sure this isn't a personal email"}
       }
        return {error: false, msg:"" };
    } else { 
        return {error: true, msg: "Invalid Email"}
    }
}

// event listener for determining the outline for valid or invalid email entry
emailInput.addEventListener("change", (ev) => {

    const value = ev.target.value;
   

    if (value && value.length > 0) {

        const err = validateEmail(value);
        let outlineColor = "green";

        if (err.error) {
            outlineColor = "red"
        } 
        emailInput.style.outline = `1px ${outlineColor} solid`;
        emailSubEl.innerHTML = err.msg;
    }

});