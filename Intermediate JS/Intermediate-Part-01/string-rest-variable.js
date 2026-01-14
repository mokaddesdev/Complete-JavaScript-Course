//!Topics 
//?  === String/Template Literals, Var vs Let vs Const, Module, Spread Operator, Rest Parameter, Destructuring, Default value ===

//? 1.1 String Literal
let firstName = "Mokaddes ALi";
console.log(`This is ${firstName}`);

//? 1.2 Var vs Let vs Const

//* var diye variable thrle next time same name variable thra jay
//* but let diye variable akoi namer akbare declare kra jay and next
//* time variable ar value change kra jay ata daynamic data ar jnno use hy
//* and const diye variable thrle value change kra jay na abar same name kono variable next time call kra jay na

//! for example
var lastName = "Ali";
var lastName = "Mokaddes Ali";
var lastName = "Ahnaf Adil";
console.log( `lastName: ${lastName}` );
//? call last variable value
const lastName1 = "Mokaddes Ali";
// const lastName1 = "Ahnaf Adil";
//!SyntaxError: Identifier 'lastName' has already been declared
console.log(` lastName1 : ${lastName1}`);

let productPrice = 1200;
productPrice = 1500;
console.log(`productPrice : ${productPrice}`);

//! What is Module?
const add = ( numb1, numb2 ) => {
    return numb1 + numb2;
}
const sub = ( numb1, numb2 ) => {
    return numb1 - numb2;
}
console.log( add( 10, 20 ) );
console.log( sub( 20, 10 ) );
const person = {
    name : 'Mokaddes ALi',
    age : 35,
    nationality : 'Bangladeshi',
    printInfo: () => {
        console.log( 'Hello I am printInfo' );
    }
}
console.log( person.name );
console.log( person.age );
console.log( person.nationality );
console.log( person.printInfo );

