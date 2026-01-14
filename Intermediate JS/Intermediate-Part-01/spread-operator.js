//! Spread operator ... in array
const oldArray = [ 1, 2, 3, 4, 5, 6 ];
const newArray = [ ...oldArray, 10, 12, 30 ];
console.log( `oldArray: ${oldArray}`);
console.log( `newArray: ${newArray}`);

//! Spread operator ... in object
const person1 = { name : 'Mokaddes Ali', age: 26 } 
const newPerson1 = { ...person1, city : 'Dhaka' }
console.log( person1);
console.log(newPerson1);