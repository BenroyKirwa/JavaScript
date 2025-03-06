/*
Implement the following functions:
1. isString(value) - Checks if input is a string
2. isNumber(value) - Checks if input is a number (but not NaN)
3. isBoolean(value) - Checks if input is a boolean
4. isUndefined(value) - Checks if input is undefined
5. isNull(value) - Checks if input is null
6. isArray(value) - Checks if input is an array
7. isObject(value) - Checks if input is an object (but not an array or null)
8. isFunction(value) - Checks if input is a function
Each function should return true if the input matches the specified type, and false
otherwise.
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

function isString(value){
    return typeof(value) === "string"
}
function isNumber(value){
    return typeof(value) === "number"
}
function isBoolean(value){
    return typeof(value) === "boolean"
}
function isUndefined(value){
    return typeof(value) === "undefined"
}
function isNull(value){
    return value === null
}

function isArray(value){
    return Array.isArray(value)
}

function isObject(value){
    return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function isFunction(value){
    return typeof value === "function"
}

function validateInput() {
    let inputElement = document.getElementById("input");
    let typeElement = document.getElementById("text");
    
    // Get the actual input value
    let value = inputElement.value.trim();

    // Convert value to correct type
    let parsedValue;
    if (value === "") {
        parsedValue = null;
    }else if(value === "undefined"){
        parsedValue = undefined;
    }else if (!isNaN(value)) {
        parsedValue = Number(value);
    } else if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
        parsedValue = value.toLowerCase() === "true";
    } else {
        try {
            parsedValue = JSON.parse(value); // Tries parsing arrays or objects
        } catch (e) {
            parsedValue = value; // Keeps it as string if parsing fails
        }
    }

    // Type checking
    if (isString(parsedValue)) {
        typeElement.textContent = "It is a String";
    } else if (isNumber(parsedValue)) {
        typeElement.textContent = "It is a Number";
    } else if (isBoolean(parsedValue)) {
        typeElement.textContent = "It is a Boolean";
    } else if (isUndefined(parsedValue)) {
        typeElement.textContent = "It is Undefined";
    } else if (isNull(parsedValue)) {
        typeElement.textContent = "It is Null";
    } else if (isArray(parsedValue)) {
        typeElement.textContent = "It is an Array";
    } else if (isObject(parsedValue)) {
        typeElement.textContent = "It is an Object";
    } else if (isFunction(parsedValue)) {
        typeElement.textContent = "It is a Function";
    } else {
        typeElement.textContent = "It is an incorrect input or value!";
    }
}

// console.log("=================================================================")
// console.log("STRINGS")
// console.log("=================================================================")
// console.log("String", isString('A string'))
// console.log("Number", isString(32))
// console.log("Boolean", isString(true))
// console.log("Undefined", isString())
// console.log("Null", isString(null))
// console.log("Array", isString([]))
// console.log("Object", isString({}))
// console.log("Function", isString(Math.max))

// console.log("=================================================================")
// console.log("NUMBERS")
// console.log("=================================================================")
// console.log("String", isNumber('A string'))
// console.log("Number", isNumber(32))
// console.log("Boolean", isNumber(true))
// console.log("Undefined", isNumber())
// console.log("Null", isNumber(null))
// console.log("Array", isNumber([]))
// console.log("Object", isNumber({}))
// console.log("Function", isNumber(Math.max))

// console.log("=================================================================")
// console.log("BOOLEAN")
// console.log("=================================================================")
// console.log("String",isBoolean('A string'))
// console.log("Number", isBoolean(32))
// console.log("Boolean", isBoolean(true))
// console.log("Undefined", isBoolean())
// console.log("Null", isBoolean(null))
// console.log("Array", isBoolean([]))
// console.log("Object", isBoolean({}))
// console.log("Function", isBoolean(Math.max))

// console.log("=================================================================")
// console.log("UNDEFINED")
// console.log("=================================================================")
// console.log("String", isUndefined('A string'))
// console.log("Number", isUndefined(32))
// console.log("Boolean", isUndefined(true))
// console.log("Undefined",isUndefined(undefined))
// console.log("Null", isUndefined(null))
// console.log("Array", isUndefined([]))
// console.log("Object", isUndefined({}))
// console.log("Function", isUndefined(Math.max))

// console.log("=================================================================")
// console.log("NULL")
// console.log("=================================================================")
// console.log("String", isNull('A string'))
// console.log("Number", isNull(32))
// console.log("Boolean", isNull(true))
// console.log("Undefined",isNull())
// console.log("Null", isNull(null))
// console.log("Array", isNull([]))
// console.log("Object", isNull({}))
// console.log("Function", isNull(Math.max))

// console.log("=================================================================")
// console.log("ARRAYS")
// console.log("=================================================================")
// console.log("String", isArray('A string'))
// console.log("Number", isArray(32))
// console.log("Boolean", isArray(true))
// console.log("Undefined",isArray())
// console.log("Null", isArray(null))
// console.log("Array", isArray([]))
// console.log("Object", isArray({}))
// console.log("Function", isArray(Math.max))

// console.log("=================================================================")
// console.log("OBJECTS")
// console.log("=================================================================")
// console.log("String", isObject('A string'))
// console.log("Number", isObject(32))
// console.log("Boolean", isObject(true))
// console.log("Undefined",isObject())
// console.log("Null", isObject(null))
// console.log("Array", isObject([]))
// console.log("Object", isObject({}))
// console.log("Function", isObject(Math.max))

// console.log("=================================================================")
// console.log("FUNCTIONS")
// console.log("=================================================================")
// console.log("String", isFunction('A string'))
// console.log("Number", isFunction(32))
// console.log("Boolean", isFunction(true))
// console.log("Undefined",isFunction())
// console.log("Null", isFunction(null))
// console.log("Array", isFunction([]))
// console.log("Object", isFunction({}))
// console.log("Function", isFunction(Math.max))
