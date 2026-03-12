/**
 * Ternary Operator
 * ( condition ) ? true : false;
 * 
 * marks >= 40 ? 'Passed' : 'Failed'
 */

let marks = 40;
const result   = marks >= 40 ? 'You are passed' : 'You are failed';
console.log( result );

/**
 * Nested Ternary Operator
 * 
 */
let a = 20;
let b = 30;
let c = 40;
let max = ( a > b ) ? ( ( a > c ) ? a : c ) : ( ( b > c ) ? b : c );
console.log(`Maximum number is ${max}`)