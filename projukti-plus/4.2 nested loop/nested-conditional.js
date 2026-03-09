const numOne   = 60;
const numTwo   = 30;
const numThree = 40;
if ( numOne > numTwo ) {
    if ( numOne > numThree ) {
        console.log(`${numOne} is maximum number`);
    } else {
        console.log(`${numThree} is maximum number`);
    }
} else{
    if ( numTwo > numThree ) {
        console.log(`${numTwo} is maximum number`);
    } else{
        console.log(`${numThree} is maximum number`);
    }
}

//! Another example
const aNum = 10;
const bNum = 20;
const cNum = 30;
if ( ( aNum > bNum ) && ( aNum > cNum ) ) {
    console.log(`${aNum} is maximum number`);
} else if ( ( bNum > aNum ) && ( bNum > cNum ) ) {
    console.log(`${bNum} is maximum number`);
} else {
    console.log(`${cNum} is maximum number`);
}