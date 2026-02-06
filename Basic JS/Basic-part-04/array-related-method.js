//? ES5 nodelist to convert array
const nodeToArray = Array.prototype.slice.call(NodeList);

const printArray = (items) => {
    for ( const item of items ) {
        console.log(item);
    }
}
const fruits = [ "apple", "banana", "mango", "orange"];

console.log('\n print main array')
printArray(fruits);
//! push method
console.log('\n push method use for cherry and new apple');
fruits.push("cherry", "new apple");
printArray(fruits);

//! pop function only one by one remove from end to start
console.log('\n after poping the item remove new apple');
fruits.pop();
printArray(fruits);

//push vs unshift
//! add item in array of start array
console.log('\nafter unshifting add item in array of start array');
fruits.unshift('old apple');
printArray( fruits );

//pop vs shift
//! shift remove item from array in start
console.log('\n after shifting remove item from array of start');
fruits.shift('old apple');
printArray( fruits );

//! array1.concat(array2)
console.log('\narray1.concat(array2) concating array')
const array1 = [ 1, 2, 3, 4, 5];
const array2 = [ 9, 5, 6,7 ];
const combined = array1.concat(array2);
printArray(combined);