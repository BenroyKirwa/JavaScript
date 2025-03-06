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

function reverseString(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

function countVowels(string) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}

function truncate(string, limit) {
    return (string.length > limit) ? string.slice(0, limit) + "..." : string;
}

function showLimitInput() {
    let operation = document.getElementById("operations").value;
    let limitInput = document.getElementById("limitInput");

    if (operation === "truncate") {
        limitInput.style.display = "inline-block"; // Show limit input
    } else {
        limitInput.style.display = "none"; // Hide limit input
    }
}

function processString() {
    let string = document.getElementById("input").value;
    let operation = document.getElementById("operations").value;
    let limit = document.getElementById("limitInput").value;
    
    let result;
    switch (operation) {
        case "reverse":
            result = reverseString(string);
            break;
        case "vowels":
            result = `Vowel count: ${countVowels(string)}`;
            break;
        case "truncate":
            result = truncate(string, parseInt(limit) || string.length);
            break;
        default:
            result = "Invalid operation!";
    }

    document.getElementById("resultText").textContent = `Result: ${result}`;
}
