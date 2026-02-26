/**
 * Math Method or Built in function
 */

console.log(Math.PI);

let number1 = 3.12344566;
let number2 = 4.56788;

//! Math round --> 0.5 above than put 1 value add or below 0.50 than fail this number and provide only integer number
console.log( Math.round(number1));
console.log( Math.round(number2));
console.log('Math floor ');

//! Math floor --> close 0.5 above or below 0.50 below number
console.log( Math.floor(number1));
console.log( Math.floor(number2));
console.log('Math ceil');

//! Math ceil --> above number 0.30 or other count 1 add
console.log( Math.ceil(number1));
console.log( Math.ceil(number2));

//! Math max
console.log( 'Math max' );
console.log( Math.max(-4,-3,1,2,4) );

//! Math min
console.log( 'Math min' );
console.log( Math.min(-4,-3,1,2,4) );

console.log( 'Math abs' );
//! Math abs
console.log(Math.abs(-10));

console.log( 'Math sign' );
//! Math sign
console.log(Math.sign(-10));
console.log(Math.sign(0));
console.log(Math.sign(10));

//! Math Square
console.log('Math Square');
console.log( Math.sqrt(10));
console.log( Math.sqrt(100));
console.log( Math.sqrt(16));

//! Math.cbrt
console.log('Math.cbrt');
console.log( Math.cbrt(16));

//! Math power
console.log('Math power');
console.log(Math.pow(10,3));

//! Math log
console.log('Math log');
console.log(Math.log(3));

//! Math Sign
console.log('Math Sign');
console.log(Math.sign(60*(Math.PI/180)));

//! Math Random
console.log('Math Random');
console.log(Math.random())
console.log(Math.floor(Math.random()*11))