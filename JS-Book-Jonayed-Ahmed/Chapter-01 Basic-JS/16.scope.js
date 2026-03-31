//! scoping
/**
 * ? 1. local/functional scope
 * * 2. global scope
 * ! 3. block scope
 * ? 4. lexical scope
 */

//! local or functional scope
const localScope = () => {
    const local = 'I am local to my own function';
    console.log( local );
}

localScope();
// console.log( local ); //! Uncaught ReferenceError: local is not defined

//! Global scope
const globalVar = "I am a glbal variable";

const globalFunc = () => {
    console.log( 'Inside a function:' + globalVar );
}

globalFunc();
console.log('Outside a function:' + globalVar );

const globalFunction = () => {
    console.log( 'Global Function' );
    const localFunction = () => {
        console.log( 'Local function' );
    }
    return localFunction();
}
globalFunction();

// localFunction(); //! Uncaught ReferenceError: localFunction() is not defined

//? Object
const person = {
    name : "Mokaddes Ali",
    age  : 25,
}
console.log( person );

const objFunc = () => {
    const localObj = {
        name : "Mokaddes Ali",
        age : 30,
    }

    console.log( localObj );
}
objFunc();
// console.log( localObj ); //! Uncaught ReferenceError: localObj is not defined

//? Lexical scoping
const mostOuter = () => {
    const mostOuterVar = "Most Outer variable";
    const firstNumber = 40;
    const outer = () => {
        console.log( mostOuterVar );
        const mostInner = () => {
            console.log( mostOuterVar );
            const inner = () => {
                console.log( mostOuterVar );
                const innerInInner = () => {
                    const secondNumber = 60;
                    console.log( 'Inner In Inner' );
                    console.log( mostOuterVar );
                    console.log( 'sum of first and second number: ' + ( firstNumber + secondNumber ) )
                }
                innerInInner();
            }
            inner();
        }
        mostInner();
    }
    outer();
}
mostOuter();

//! block scope
{
    const blockFunc = () => {
        const blockFuncVar = "I am a block function";
        console.log( blockFuncVar );
    }
    blockFunc();
}
 // blockFunc(); //! Uncaught ReferenceError: blockFunc() is not defined