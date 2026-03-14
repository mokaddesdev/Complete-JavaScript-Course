/**
 * Truthy and falsy value
 * Falsy value =>
 *  1. false
 *  2. 0
 *  3. -0
 *  4. ""
 *  5. NaN
 *  6. undefined
 *  7. null
 * 
 * Truthy value =>
 *  1. true
 *  2. ( -2, -1 .... 1, 2, ....., 0.5, 0.455 ..... )
 *  3. 3.1416
 *  4. "Mokaddes"
 *  5. function() {}
 *  6. {}
 *  7. []    
 */

console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("false"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

const products = [];
console.log( products.length ? "Showing Products" : "No products avaiable" );