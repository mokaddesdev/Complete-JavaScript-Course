console.log("test");
//! var vs let vs const
//? var old version
var numb1 = 10;
 numb1 = 20;
console.log(numb1);
//? let
let price = 200;
 price = 200;
 console.log(price);
//? const
const numb2 = 20;
console.log(numb2);
//! == vs ===
//? Data type => number, string
const eql1 = 10 == '10';
const eql2 = 10 === '10';
console.log(eql1);
console.log(eql2);
//! DOM
//! traditional function vs arrow function
const digit1 = 50;
const digit2 = 80;
let result;
//? traditional
function sum( digit1 , digit2 ) {
    return result = digit1 + digit2;
}

//? Arrow 
const sum1 = ( digit1 , digit2 ) => result = digit1 + digit2;
const sum2 = digit1 => digit1;