/**
 * Conditional logic => if, if else, if elseif else 
 */

const anotherNumber = 10;
if ( anotherNumber > 0 ) {
    console.log(`${anotherNumber} is positive number`);
} else{ //? otherwise
    console.log(`${anotherNumber} is a negative number.`)
}

const aNumber = 'Mokaddes Ali';
if ( aNumber > 0 ) {
    console.log(`${aNumber} is a postive number`);
} else if ( aNumber < 0 ) {
    console.log(`${aNumber} is negative number`);
} else if ( aNumber == 0 ) {
    console.log(`${aNumber} is equal to zero`);
} else {
    console.log(`${aNumber} is not a number.`);
}