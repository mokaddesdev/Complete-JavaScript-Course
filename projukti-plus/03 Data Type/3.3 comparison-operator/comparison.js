/**
 * ! Comparison Operator
 *      ==       ---> Equal in value only            --->    x == y
 *      ===      ---> Equal value and data type      --->    x === y
 *      !=       ---> Not equal                      --->    x != y
 *      !==      ---> Exactly not equal              --->    x !== y
 *      >        ---> Greater than                   --->    x > y
 *      <        ---> Less than                      --->    x < y
 *      >=       ---> Greater than or equal to       --->    x >= y
 *      <=       ---> less than or equal to          --->    x<= y
 */

let number1 = 20;
let number2 = '20';
let number3 = 40;
let equal = number1 == number2;
console.log( equal );

let exactEqual = number1 === number1;
console.log( exactEqual );

let notEqual = number1 != number3;
console.log( notEqual );

let exactNotEqual = number1 !== number3;
console.log( exactNotEqual );

let greaterThan = number1 > number3;
console.log( greaterThan );

let lessThan = number1 <number3;
console.log( lessThan );

let greaterThanOrEqual = number1 >= number3;
console.log( greaterThanOrEqual );

let lessThanOrEqual = number1 <= number3;
console.log( lessThanOrEqual );

console.log( 0 == false );  //! true
console.log( 0 === false ); //! false

console.log( 1 == true ); //! true
console.log( 1 === true ); //! false

console.log( null == undefined ); //! true
console.log( null === undefined ) //! false