/*
Data Type
    1. Primitive ( immutable --> not changable )
            1. Number --> integer, floating
                let price = 25 or 30.50;

            2. String --> text
                const name = "Mokaddes Ali";

            3. Undefined --> variable define but not value assign
                let address;

            4. Null --> empty value
                let amount = null;

            5. Boolean --> true or false
                let isStudent = false;

            6. Symbol --> unique identify
                let uniqueId = Symbol("id");

            7. BigInt --> very large number
                let bigInt = 1232325456465768678797800;

    2. Non-primitive ( mutable, value change any time )
            1. Array     --> []
            2. Object    --> new
            3. Function  --> 
 */

//!Define object

let products = {
    name : "Mobile",
    price : 12500,
}

//! Array
let foods = [ 'Mango', 'Banana', 'Apple' ];
foods[2] = 'New Food';
console.log(foods);
console.log(foods[0]);

// primitive value is not change than use for compare with condition
let name = "Mokaddes Ali";
name[0] = 'P';
console.log(name[0]);

let number1 = 4;
let number2 =4;
console.log( number1 === number2 );

let num1 = {
    name : 'Ali',
}

let num2 = {
    name : 'Ali',
}

console.log( num1 === num2 );