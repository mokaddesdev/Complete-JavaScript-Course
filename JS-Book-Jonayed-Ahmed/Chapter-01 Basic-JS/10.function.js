//! Traditional function
function funcName() {
    console.log( 'Hello I am function from the function.');
}
funcName();

const printMe = function() {
    console.log("print me");
    console.log("printed");
}
printMe();


const argumentsParameter = function( parameter1, parameter2 ) {
    console.log( "printing..." + parameter1 +parameter2 );
}

argumentsParameter("argument1", "argument2");

const sumMechine = ( number1, number2 ) => {
    const sum = number1 + number2;
    return sum; 
}

console.log( sumMechine( 20, 30 ) ); 
console.log( sumMechine( 40, 70 ) );


const myInfo = ( name, age ) => {
    console.log( 'My name is ' + name + ' I am ' + age + ' years old' );
}
console.log( myInfo( "Adil Ahnaf", 2 ) );

const printMyInfo = ( name, callback ) => {
    const myAge = 25;
    callback( myAge );
    console.log( `My name is ${name} and I am ${myAge} years old.` );
}

const hello = age => {
    console.log( 'I am passed through argument and my age is:' + age );
}

printMyInfo( 'Mokaddes Ali', hello);

// alert("hello alert");
// confirm(prompt("enter your name"));

const welcomeMsg = ( name ) => {
    console.log("Welcome Mr. " + name );
    return ( menu ) => {
        console.log("Do you like " + menu + ', Mr. ' + name );
    }
}
welcomeMsg("Mokaddes Ali")("Coffee");

const changeValue = ( a ) => {
    console.log("Value of a inside function before changing: " + a );
    a =10;
    console.log("Value of a inside function after changing: " + a );
}

let a = 100;
console.log('Value of a before changing function is applied: ' + a );
changeValue(a);
console.log( "Value of a after changing function is apllied: " + a );

const aFunc = ( b ) => {
    console.log('Before changing the property: ' + b.one );
    b.one = 'two';
    console.log('After changing the property: ' + b.one );
}
let b = {
    one: 'one',
}
aFunc(b);

const calc = ( a, b ) => {
    return console.log( 2 * ( a + b ) );
}

calc( 20, 30 );

//! default parameter
const calc1 = ( a = 0, b = 0 ) => {
    return console.log( 2 * ( a + b ) );
}

calc1( 20 );

const collectThis = ( param1, ...param2 ) => {
    console.log( param1 );
    console.log( param2 );
}

collectThis(1,2,3,4,5,6,7,8,9)