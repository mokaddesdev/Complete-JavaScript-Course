//! Callback and higher order function
const calculator = ( numb1, numb2, operation ) => {
    return operation( numb1, numb2 );
}
const add = ( numb1, numb2 ) => {
    return numb1 + numb2;
}
const sub = ( numb1,numb2 ) => {
    return numb1 - numb2;
}
const multi = ( numb1, numb2 ) => {
    return numb1 * numb2;
}
const divi = ( numb1, numb2 ) => {
    return numb1 / numb2;
}
const modulas = ( numb1, numb2 ) => {
    return numb1 % numb2;
}
//! hence add, sub, multi, divi, modulas function is callback function
//? calculator function is higher order function
const result1 = calculator( 30, 50, add );
console.log( `Add 30 + 50 = ${ result1 }` );

const result2 = calculator( 30, 50, sub );
console.log( `Sub 30 + 50 = ${ result2 }` );

const result3 = calculator( 30, 50, multi );
console.log( `Multiply 30 + 50 = ${ result3 }` );

const result4 = calculator( 30, 50, divi );
console.log( `Division 30 + 50 = ${ result4 }` );

const result5 = calculator( 30, 50, modulas );
console.log( `Modulas 30 + 50 = ${ result5 }` );

//! Two type callback function
//? syncronous and asynchronuous callback function


function callMyName ( name, callback) {
    var myAge = 25;
    callback(myAge);
    console.log(`Is it interesting? Yes it is Mr.` + name);
}

function hello(age){
    console.log(` I am passed through argument and my age is:` + age);
}
callMyName(' Mokaddes Ali', hello);


// ## Function to Function Return

function welcomeMsg (name){
    console.log(`Welcome Mr.` + name);

    return function options( menu ){
        console.log(`Do you like` + ' ' + menu + ' ' + `Mr.` + name);
    }
}

 welcomeMsg(" Mokaddes Ali") ('Coffee');

 /**
  * Function is set a variable
  */
 var aFunction = function( name ){
    console.log(` I am simply a function and my name is ` + name);
 }

 var anotherFunction = aFunction;
 anotherFunction("Mokaddes Ali");

 /**
  * To Find Array function list
  */
 console.dir(Array());

 /**
  * Map() , Filter(), Reduce()
  * 
  * Map()
  */
//  anArray.map(callbackFunction, thisArg);

 /**
  * Use map()
  */

 const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

 // Find square of Array
 var anotherArr = [];
 for( var i =0; i < array.length; i++) {
    anotherArr.push(array[i] * array[i]);
 }

 console.log(array);
 console.log(anotherArr);

 // using map
 function getSquare ( item ){
    return item * item;
 }
 var newArray = array.map(getSquare);
 console.log(newArray);

 // inline
 var newArr = array.map( function (item){
    return item * item;
 })
 console.log(newArr);

 // map and filter pass three arguments like as item => per item, index => item index, fullArr => full array 
 var newArray1 = array.map( function ( item, index, fullArr) {
    console.log( `Item:` + item + ` and index: ` + index + `. Full Aray:` + fullArr);
 });

 // map in ES6

 var newArray2 = array.map( item => item * item);
 console.log( newArray2 );

 // filter in ES5
 var newArrayByFilter = array.filter( function ( item ){
    return item % 2 == 0;
 });
 console.log(` newArrayByFilter:`  + newArrayByFilter)

 // filter in ES6 by aninomose function
 var newArrayByFilter1 = array.filter( item => item % 2 == 0);
 console.log(newArrayByFilter1);

 /**
  * Reduce pass 4 arguments , extra 4 number argument state variable
  * 
  * state variable ,
  * let count = 0;
  * count = count + 1;
  * programme running change value, put old value and give added value and provide new value and give user interfase
  * 
  */

 var totalByReduce = array.reduce( function ( sum, item){
    return sum += item; 
 }, 0); // 0 is initial value means start value, like 10 start value 10
 console.log( `totalByReduce = ` + totalByReduce);

 var totalByReduce1 = array.reduce(  ( sum, item) => sum += item,10); // ike 10 start value 10;  totalByReduce + 10 = total result
 console.log( `totalByReduce1 = ` + totalByReduce1);

 /**
  * This use in map
  */

 const anObject = {
    name : 'mokaddes ali',
    age : 25,
 }

 const anArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

 anArr.map( function (single, index, fullArr){
    console.log(this);
 });
  anArr.map( function (single, index, fullArr){
    console.log(this);
 }, anObject);
