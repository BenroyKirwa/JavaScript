/*
Create a JavaScript function called checkPasswordStrength() that analyzes a password
and returns a rating of its security level.
Evaluate against the below security criteria:
1. Min Length of 8 characters
2. At least 1 uppercase letter
3. At least 1 lowercase letter
4. At least 1 number
5. At least 1 special characters
Returns weak, medium, or strong based on how many criteria are met
*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menuButton").style.display = "none";
  }
  

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menuButton").style.display = "block";
}

document.getElementById("passInput").addEventListener("input", checkPasswordStrength)

function checkPasswordStrength(){
    // Getting the password input
    const password = document.getElementById("passInput").value;
    const criteria = document.getElementById("passCriteria");

    // Defining the regexes
    const minLengthRegex = /.{8,}/;
    const leastOneCapRegex = /[A-Z]+/;
    const leastOneSmallRegex = /[a-z]+/;
    const leastOneNumRegex = /\d+/;
    const leastOneSpecialRegex = /[^a-zA-Z0-9]+/;


    // Count how many criteria are met
    let score = 0;
    if (minLengthRegex.test(password)) score++;
    if (leastOneCapRegex.test(password)) score++;
    if (leastOneSmallRegex.test(password)) score++;
    if (leastOneNumRegex.test(password)) score++;
    if (leastOneSpecialRegex.test(password)) score++;

    // Determine strength based on the score
    if (score === 5) {
        criteria.textContent = "STRONG";
        criteria.style.color = "green";
    } else if (score >= 3) {
        criteria.textContent = "MEDIUM";
        criteria.style.color = "orange";
    } else {
        criteria.textContent = "WEAK";
        criteria.style.color = "red";
    }
}


