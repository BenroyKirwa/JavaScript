/*
convert("Hello, World.", "camel")
Output: helloWorld
convert("Hello, World.", "snake")
Output: hello_world
convert("Hello, World.", "kebab")
Output: hello-world
convert("Hello, World.", "pascal")
Output: HelloWorld
convert("Hello, World.", "uppercasesnake")
Output: HELLO_WORLD
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

function convert() {
    // Get the current input value each time the function is called
    let string = document.getElementById("input").value;
    let format = document.getElementById("cases").value;
    
    // Ensure the input is properly processed
    let words = string.trim().toLowerCase().split(/\s+/);
    let result = "";
    
    switch (format) {
        case "camel":
            result = words
                .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
                .join("");
            break;
        case "snake":
            result = words.join("_");
            break;
        case "kebab":
            result = words.join("-");
            break;
        case "pascal":
            result = words
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join("");
            break;
        case "uppercasesnake":
            result = words.join("_").toUpperCase();
            break;
        default:
            result = "Invalid format type!";
    }
    
    document.getElementById("caseText").textContent = result;
}


function toArray(string){
    let arr = [];  // Using an object as an array substitute
    let word = ""; // Temporary storage for each word
    let index = 0; // Manual index tracking

    for (let i = 0; string[i] !== undefined; i++) {  // Loop through the string
        let char = string[i];
        
        if (char !== " ") {  // If it's not a space, add to the current word
            word += char;
        } else if (word !== "") { // If a space is found and word is not empty
            arr[index] = word;  // Store the word manually
            index++;  // Move to the next index
            word = "";  // Reset word for the next one
        }
    }

    // Add the last word if the string doesn't end with a space
    if (word !== "") {
        arr[index] = word;
    }
    return arr;
}

function toString(array){
    let str = "";
    for(i=0; i<array.length; i++){
        str = str + array[i];
    }
    return str;
}

function toCamelCase(arr) {
    let result = ""; // Store final camelCase string

    for (let i = 0; arr[i] !== undefined; i++) {  // Loop through manual array
        let word = arr[i];  // Get each word
        if (i === 0) {  
            result += word.toLowerCase(); // First word is lowercase (manually done)
        } else {
            // Manually capitalize the first letter and add the rest
            let firstChar = word[0];  // Get first letter
            let capitalized = ""; 

            // Convert first letter to uppercase
            if (firstChar >= 'a' && firstChar <= 'z') {
                capitalized += String.fromCharCode(firstChar.charCodeAt(0) - 32);
            } else {
                capitalized += firstChar; // Already uppercase
            }

            // Append the rest of the word manually
            for (let j = 1; word[j] !== undefined; j++) {
                capitalized += word[j];  
            }

            // Add capitalized word to result
            result += capitalized;
        }
    }

    return result; // Return final camelCase string
}

function toPascalCase(arr) {
    let result = ""; // Store final camelCase string

    for (let i = 0; arr[i] !== undefined; i++) {  // Loop through manual array
        let word = arr[i];  // Get each word
        
        // Manually capitalize the first letter and add the rest
        let firstChar = word[0];  // Get first letter
        let capitalized = "";

        // Convert first letter to uppercase
        if (firstChar >= 'a' && firstChar <= 'z') {
            capitalized += String.fromCharCode(firstChar.charCodeAt(0) - 32);
        } else {
            capitalized += firstChar; // Already uppercase
        }

        // Append the rest of the word manually
        for (let j = 1; word[j] !== undefined; j++) {
            capitalized += word[j];
        }

        // Add capitalized word to result
        result += capitalized;

    }

    return result; // Return final pascalCase string
}

function toSnakeCase(arr){
    let result = "";

    for(i=0; arr[i]!= undefined; i++){
        word = arr[i];
        result += word.toLowerCase();
        if (i < arr.length - 1) {  // Only add "_" if it's NOT the last word
            result += "_";
        }
    }
    
    // Remove the trailing underscore
    return result;
}

function toKebabCase(arr){
    let result = "";

    for(i=0; arr[i]!= undefined; i++){
        let word = arr[i];
        result += word.toLowerCase();
        if (i < arr.length - 1) {  // Only add "_" if it's NOT the last word
            result += "-";
        }
    }
    // Remove the trailing hyphen
    return result;
}

function toUpperCaseSnake(arr){
    let result = "";

    for(i=0; arr[i] != undefined; i++){
        let word = arr[i];
        result += word.toUpperCase();
        if (i < arr.length - 1) {  // Only add "_" if it's NOT the last word
            result += "_";
        }
    }

    return result;
}

function convertTwo(string, format){

    let newArray = toArray(string);

    switch (format) {
        case "camel":
            return toCamelCase(newArray);

        case "snake":
            return toSnakeCase(newArray);

        case "kebab":
            return toKebabCase(newArray);

        case "pascal":
            return toPascalCase(newArray);

        case "uppercasesnake":
            return toUpperCaseSnake(newArray);

        default:
            return "Invalid format type!";
    }
}

