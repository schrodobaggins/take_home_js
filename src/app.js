//   SingleStore New Grad Hiring Challenge
//   Michael Schroeder
//   3/24/2022

'use strict'

const switcher = document.querySelector('.btn');
const radio = document.querySelector('.radio');

// light mode / dark mode theme
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    let className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

// event handler for scheduling a time button
radio.addEventListener('click', function() {
    document.body.classList.toggle('/unqualified.html')

    let className = document.body.className;
    if(className == "1-10") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

// form validation for an empty form
function validateForm() {
    let x = document.forms["email"]["businessEmail"].value;
    if (x == "") {
      alert("Business email must be entered");
      return false;
    }
}

// form validation for proper email format using js regex and indexOf()
function ValidateEmail(inputText) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let index = mailFormat.indexOf('@yahoo.com','@gmail.com','@hotmail.com');
    if(inputText.value.match(mailFormat))
    {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    } else {
        if (index > -1) {
            alert("Please make sure this isn't a personal email address");
          }
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}