//! Js variable
/**
 * invalide variable name
 * start number, -, -9hello, 2age, specail
 * 
 * lowercase or uppercase a-z or A-Z
 * $
 * underscore(_)
 * example--> number, $number, sayName, _name, Name
 * 
 * name, Name ( case sensitive )
 * 
 * camelcase stye variable
 * example---> myName, yourAge, personName, productName
 * reserve key words are not use for variable name
 * example ---> let, const, var, for, while, do-while etc
 */

var name = "Mokaddes Ali";
var name = "Ahnaf Adil";
//? var key word override previous variable value
console.log(name)

const personAge = 34;
// const personAge = 30;
console.log(personAge);

let price = 30;
price = 50;
console.log(price);