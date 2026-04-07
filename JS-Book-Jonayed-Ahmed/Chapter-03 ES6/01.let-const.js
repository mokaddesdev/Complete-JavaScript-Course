var name = "Mokaddes Ali";
console.log( `My name is ${name}` );

name = "Ahnaf Adil";
console.log( `My name is ${name}` );

let userName = "Mokaddes Ali";
console.log( `My name is ${userName}` );

userName = "Ahnaf Adil";
console.log( `My name is ${userName}` );

const userEmail = "mokaddes.ru2000@gmail.com";
console.log( `Your email: ${userEmail}` );
//! userEmail = "mokaddes.ru2000@gmail.com"; Uncaught TypeERROR

function es5var() {
    if( true ) {
        var a =5;
    }
    console.log( `value is: ${a}`);
}

es5var();

// function es6var() {
//     if( true ) {
//         let a =5;
//     }
//     console.log( `value is: ${a}`);
// }

// es6var();

console.log( aVar );
var aVar = "Mokaddes Ali";

/*
console.log( varWithEs6 ); //! ReferenceError: Cannot access 'varWithEs6' before initialization
const varWithEs6 = "some value";
*/

var i = 13;
for( i = 1; i < 5; i++ ) {
    console.log( i );
}
console.log( 'Value' + i );

let i6 = 10;
for(let i6 = 0; i6 < 5; i6++ ) {
    console.log( i6 );
}
console.log( 'Value' + i6 );