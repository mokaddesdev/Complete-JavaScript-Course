//! variable
console.log( 'Day 02' );

//! variables => variables are used to store data in JavaScript

//? let/const storage_name = value;

let fruit = "mango";
console.log( fruit );
//* value Assignments = assignment operator
fruit = "Kiwi"; // reassign value
console.log( fruit );

let vegetable = "carrots";
console.log( vegetable );
fruit = vegetable
console.log( fruit );

/**
 * Rules of call variables
 *  1. The name must have digits( 0-9 ) or letters
 *  2. The name can have $ and _.
 *  3. The first character must not be a digit
 *  4. No Reserved keywords
 * 5. Use camelCase  => myName
 * 6. Human Readable => yourAge etc
 * 7. The name should match the use cause => amount, salary, totalAmount
 */

//TODO Example
let $ = 'dollar';
let _ = 'underscore';
//! let 2morrow; Invalid
//! let react-play; Invalid
let myName = "Mokaddes Ali"; //? myName != MyName
let MyName = "Mokaddes Ali"; //? case sensitive

/**
 * var   => function scoped, can be redeclared and reassigned ( not recommended or no use )
 * let   => block scope, can be reassigned
 * const => block scope, can not be reassigned
 */

var address = "Dhaka";
console.log( address );

var address = "Rajshahi";
console.log( address );

address = "Nilphamari";
console.log( address );

//! userAge let variable
let userAge = 25;
console.log( userAge );
userAge = 30;
console.log( userAge );

let age;
age = 20;
console.log( age );

//? const variable keyword
const userAddress = "India";
console.log( userAddress );
