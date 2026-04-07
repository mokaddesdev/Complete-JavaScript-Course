let example = "Hello";
example = 42;

let num = 42;
console.log( num );
console.log(typeof num); // "number"

let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // "boolean"

let exampleVariable = null;
console.log(typeof exampleVariable); // object type

let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};

const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false

let cityName = "New York";
cityName = "Los Angeles";
console.log(cityName); // Los Angeles
/*
const cityName1 = "New York";
cityName1 = "Los Angeles"; // TypeError: Assignment to constant variable.
*/

/**
 * *** Variable Naming Conventions 
        - Variable names should be descriptive and meaningful.
        - Variable names should be camelCase like cityName, isLoggedIn, and veryBigNumber.
        - Variable names should not start with a number. They must begin with a letter, _, or $.
        - Variable names should not contain spaces or special characters, except for _ and $.
        - Variable names should not be reserved keywords.
        - Variable names are case-sensitive. age and Age are different variables.
 */

let correctWay = 'This is a string';
let alsoCorrect = "This is also a string";

let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // John Doe

let studentName = "Asad";
let studentAge = 25;
let studentInfo = studentName + " is " + studentAge + " years old.";
console.log(studentInfo); // Asad is 25 years old.
/*
let message = "Welcome to programming, ";
message += "Asad!";
console.log(message); // Welcome to programming, Asad!
*/
