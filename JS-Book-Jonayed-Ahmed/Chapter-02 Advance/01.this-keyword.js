//! Global Contest this keyword

console.log( this );

console.log( this === window )

function helloThis() {
    console.log(this);
}

helloThis();

function helloThisStrict() {
    'use strict';
    console.log( this );
}
helloThisStrict();

//? Ancidental Global Variable
function usName() {
    this.name = 'Mokaddes Ali';
}
usName();
console.log( name );

//! Object Rules
const myCustomObj1 = {
    name: 'Mokaddes Ali',
    age: 25,
    job: 'student',
    msg: function() {
        console.log( this );
    }
}
console.log( myCustomObj1.msg() )

const myCustomObj2 = {
    name: 'Mokaddes Ali',
    age: 25,
    job: 'student',
    anotherObj: { 
        name: 'Ahnaf Adil',
        msg: function() {
        console.log( `My name is ${this.name}` );
    }
    }
}
console.log( myCustomObj2.anotherObj.msg() );

//! Clear Rule Or Sposto rule
console.log( myCustomObj2.anotherObj.msg.call(myCustomObj2) );