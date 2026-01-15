/**
 * 1.foreach()
 * 2.map()
 * 3.filter()
 * 4.some()
 * 5.every()
 *  6.sort()
 * 7.reduce()
 */ 
//? Persons Array
const persons = [ 'Ali', 'Alina', 'Mokaddes', 'Ahnaf Adil' ];

//! For loop
for( let index = 0; index <= persons.length; index++ ) {
    console.log( persons[index] );
}
console.log( 'From for loop to foreach loop' );
//! From for loop to foreach loop
//? no extra 1 increment loop better for loop
/**
 * Structure
 * pass three parameter
 * 
 * Array.forEach( singledata, index number, fullArray ) {
 *  console.log(singledata);
 * }
 */
persons.forEach( ( person ) => {
    console.log( person );
});

//? Find Square Number
//! Use for loop need extra array and use push method and call index
const numbers = [ 1, 3, 5, 7, 9 ];
const squareNumber = [];
for( let index = 0; index < numbers.length; index++) {
    squareNumber.push( numbers[index]*numbers[index] );
}
console.log( `squareNumber:${squareNumber}` );

//! Use forEach() need extra array and use push method 
const squareNumber1 = []
numbers.forEach( (number) => {
    squareNumber1.push( number * number );
})
console.log( `squareNumber1: ${ squareNumber1 }` );

//! Use map() no need array and push method; map() handle auto
const squareNumber2 = numbers.map( (number) => {
    return number * number;
} )
console.log(`squareNumber2byMap: ${squareNumber2}`);

//? Using map()
const persons1 =  [
    { id : 1, name : 'Mokaddes', roll : 16 },
    { id : 2, name : 'Milon', roll : 15 },
    { id : 3, name : 'Mijan', roll : 10 },
    { id : 4, name : 'Sobuj Islam', roll : 12 },
];

persons1.map( ( person, index, fullArray ) => {
   console.log(`Person Index: ${index+1 } `);
   console.log( `Person Id: ${person.id} }`);
   console.log(`Person Name: ${person.name} `);
   console.log(`Person Roll: ${person.roll} and ${fullArray}`);
} );
