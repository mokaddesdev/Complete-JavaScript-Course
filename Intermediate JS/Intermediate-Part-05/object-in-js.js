//! Protoype Base Object Oriented Programming Language
//? 1. Primitive data type 
//* For Example => number, string, undefined, null
//? 2. Object
//* all in JavaScript are object => Array, Function, Object, Date, Number, String, Boolean, Wrapper

//! Swap => a value go b and b value go a

//? In premitive data type
const a = 20;
const b = 50;
console.log( 'Before swap: Value of a ' + a + ' and value of b ' + b );
function swap(a, b) {
    console.log( 'before swap inside function value a and b are: ' + a + ' and ' + b );
    const temp = a;
    a = b;
    b = temp;
    console.log( 'After swap inside function value a and b are : '  + a + ' and ' + b );
}
swap(a,b);
console.log( 'After swap value a and b are : '  + a + ' and ' + b );


//! in object data type
const obj = {
    a : 10,
    b : 30,
}
console.log( 'Before swap in object: Value of a ' + obj.a + ' and value of b ' + obj.b );
function swap( x ) {
    console.log( 'Before swap in object inside function value a and b are: ' + x.a + ' and ' + x.b );
    const temp = x.a;
    x.a = x.b;
    x.b = temp;
    console.log( 'After swap in object inside function value a and b are : '  + x.a + ' and ' + x.b );
}
swap( obj );
console.log( 'After swap in object value a and b are : '  + obj.a + ' and ' + obj.b );

const array = [ 1, 2, 3, 4, 5, 6 ];
console.log('array.length: ' + array.length)
console.log(array.push(100));
console.log(array)

//? Dunder proto
console.dir({});

console.dir(array)

