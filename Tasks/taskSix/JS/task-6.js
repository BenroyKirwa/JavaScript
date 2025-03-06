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

function findMin(arr) {
    let fix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < fix) {
            fix = arr[i];
        }
    }
    return fix;
}

function findMax(arr) {
    let fix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > fix) {
            fix = arr[i];
        }
    }
    return fix;
}

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function processArray() {
    let input = document.getElementById("input").value;
    let operation = document.getElementById("operations").value;
    
    // Split input by commas and trim spaces
    let elements = input.split(",").map(item => item.trim());
    
    // Detect if the array contains **only numbers** or **strings**
    let isNumeric = elements.every(item => !isNaN(item));

    // Convert to numbers if it's numeric
    let data = isNumeric ? elements.map(Number) : elements;

    let result;
    switch (operation) {
        case "min":
            result = isNumeric ? findMin(data) : "Not applicable for strings";
            break;
        case "max":
            result = isNumeric ? findMax(data) : "Not applicable for strings";
            break;
        case "sum":
            result = isNumeric ? arraySum(data) : "Not applicable for strings";
            break;
        case "unique":
            result = removeDuplicates(data).join(", ");
            break;
        default:
            result = "Invalid operation!";
    }

    document.getElementById("resultText").textContent = `Result: ${result}`;
}
