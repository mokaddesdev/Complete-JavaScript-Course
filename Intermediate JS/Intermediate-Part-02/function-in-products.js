//! Use Map(), Filter(), Some(), Every(), Reduce(), Sort()

const products = [
    { id :1, name : 'Tecno Spark 5Pro', brand : 'Tecno', category : 'mobile', price : 15000 },
    { id :2, name : 'Sumsung Galaxy', brand : 'Sumsung', category : 'mobile', price : 25000 },
    { id :3, name : 'iPhone s16 Pro', brand : 'Apple', category : 'mobile', price : 15000 },
    { id :4, name : 'Daynabook 40c Pro', brand : 'Toshiba', category : 'laptop', price : 45000 },
    { id :5, name : 'HP Elite 40c Pro', brand : 'HP', category : 'laptop', price : 55000 },
];

//? Use map()
products.map( ( product ) => {
    console.log( `product.name: ${ product.name }` );
    console.log( `product.category: ${ product.category }`  );
    console.log( `product.price: ${ product.price }` );
} );

//? Use filter()
const filterProduct = products.filter( ( product ) => {
    return product.price > 20000;
} );
console.log( filterProduct  );

//? Use filter() and map() both
console.log(`product.price >= 35000 by filter() and show data by map()`);
const filterProduct1 = products.filter( product => {
    return product.price >= 35000;
} );
filterProduct1.map( product => {
    console.log( product.name );
    // console.log( product.category );
    console.log( product.price );
} );

//? search By Filter exact value
console.log( `search By Filter exact product Tecno Spark 5Pro ` );
const searchProduct = products.filter( ( product ) => {
    return product.name === 'Tecno Spark 5Pro';
} );
searchProduct.map( product => {
    console.log( product.name );
} );

//? search By Filter expected value
console.log( `search By Filter expected value` );
const searchProduct1 = products.filter( ( product ) => {
    return product.name.includes ('Tecno');
} );
searchProduct1.map( product => {
    console.log( product.name );
} );

//? search By Filter lower or uppercase
console.log( `search By Filter lower or uppercase by category` );
const searchProduc = 'mobile';
const searchProduct2 = products.filter( ( product ) => {
    return product.category.toLowerCase().includes( searchProduc.toLowerCase() );
} );
searchProduct2.map( product => {
    console.log( product.category );
    console.log( product.name );
} );

//! Use reduce() all value in one value or find sum

//? use for loop
let totalPrice = 0;
for( let index = 0; index<products.length; index++ ) {
    totalPrice += products[index].price;
}
console.log( `You have to pay in total amount: ${ totalPrice }` );

//? Use forEach
let totalPrice1 = 0;
products.forEach( (product) => {
    return totalPrice1 += product.price;
} );
console.log( `Products totalPrice1: ${ totalPrice1 }` );

//! Use Reduce()
const totalPric = products.reduce( ( acc, product ) => {
    return acc += product.price;
}, 0);
console.log(`total product price by reduce : ${ totalPric }`);

//! Use Map() and Reduce()
const totalProduct = products
.map( product => product.price )
.reduce( ( acc, currentPrice ) =>{
    return acc + currentPrice;
}, 0 );
console.log(`totalProduct: ${totalProduct}`);

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

