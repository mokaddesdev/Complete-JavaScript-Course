//! Callback and higher order function
const calculator = ( numb1, numb2, operation ) => {
    return operation( numb1, numb2 );
}
const add = ( numb1, numb2 ) => {
    return numb1 + numb2;
}
const sub = ( numb1,numb2 ) => {
    return numb1 - numb2;
}
const multi = ( numb1, numb2 ) => {
    return numb1 * numb2;
}
const divi = ( numb1, numb2 ) => {
    return numb1 / numb2;
}
const modulas = ( numb1, numb2 ) => {
    return numb1 % numb2;
}
//! hence add, sub, multi, divi, modulas function is callback function
//? calculator function is higher order function
const result1 = calculator( 30, 50, add );
console.log( `Add 30 + 50 = ${ result1 }` );

const result2 = calculator( 30, 50, sub );
console.log( `Sub 30 + 50 = ${ result2 }` );

const result3 = calculator( 30, 50, multi );
console.log( `Multiply 30 + 50 = ${ result3 }` );

const result4 = calculator( 30, 50, divi );
console.log( `Division 30 + 50 = ${ result4 }` );

const result5 = calculator( 30, 50, modulas );
console.log( `Modulas 30 + 50 = ${ result5 }` );

//! Two type callback function
//? syncronous and asynchronuous callback function