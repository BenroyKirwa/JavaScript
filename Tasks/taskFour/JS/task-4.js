/*
Write a JavaScript function called getInitials() that takes a person's name as input and
returns their initials as output. The function should extract the first letter of each word in
the name and return them capitalized without any separators.

getInitials(“John Doe”)
Output: JD
getInitials (“Martin Luther King”)
Output: MK
getInitials(“Harry”)
Output: H
getInitials(“Hermione Granger”)
Output: HG

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

function getInitials() {
    let name = document.getElementById("input").value;
    let result = "";
    result = name
        .split(" ") // Split the name into an array of words
        .map(word => word.charAt(0).toUpperCase()) // Get the first letter of each word & capitalize
        .join(""); // Join them without spaces

    document.getElementById("text").textContent = result;
}