/*
Changing Data Type
        1. String to Number ( Integer/ Float )
            parseInt()
            parseFloat()
            Number()
            +variable
        2. Number to String
            String()
            toString
        3. Float to Integer
            parseInt()
        4. Integer to Float
            parseFloat()
*/
var numStr = "10";
//! Three way string to number convert
console.log( parseInt(numStr));
console.log( Number(numStr));
console.log( Number(+numStr));

//! string to float number convert
const strNumber = "15.405";
console.log(parseFloat(strNumber));
console.log(Number(strNumber));
console.log(+strNumber);
console.log(typeof(parseFloat(strNumber)));

//! number to string

const number = 10;
console.log( typeof(String(number)));
const strConvert = number.toString();
console.log(strConvert);
console.log( typeof(strConvert));

//! floatNumber to integer number
const floatNumber = 30.345;
console.log( parseInt(floatNumber));
console.log( typeof(parseInt(floatNumber)));

const numInt = 20;
const floatNum = parseFloat(numInt);
console.log( floatNum );
console.log( typeof(floatNum));

const priceOne = "30.40";
const pricetwo = "40.50";
const totalPrice = parseFloat( priceOne ) + parseFloat ( pricetwo );
console.log( totalPrice );