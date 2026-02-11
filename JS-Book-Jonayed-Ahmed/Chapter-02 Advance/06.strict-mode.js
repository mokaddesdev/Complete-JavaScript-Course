'use strict'; // all concept must strict mode apply
const name = 'Mokaddes Ali';
const age = 25;
const address = 'Nilphamari';
console.log( 'My name is ' + name + ' and i am ' + age + 'years of old!' );
function aFunc () {
    // 'use strict'; 
    job = 'student';
    console.log( 'A function with strict mode enabled')
}
aFunc();
console.log('I am a ' + job + ' And I am from' + address );

//! Object strict mode
const aObj = {
    name: 'Mokaddes Ali',
    age: 25,
}
Object.preventExtensions(aObj)
aObj.age = 35;
console.log( aObj.age)