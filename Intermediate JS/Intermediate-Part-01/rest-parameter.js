//! Rest Parameter in function

const addNumber = ( numb1, numb2, numb3 ) => {
    return numb1 + numb2 + numb3;
}
console.log(addNumber(10,20,30));
console.log(addNumber(10,20,30,40));
console.log(addNumber(10,20,30,40,50));

let sum = 0;
const addNumber1 = ( ...numbers ) => {
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}
const result01 = addNumber1(10,20,30);
const result02 = addNumber1(110,20,30);
const result03 = addNumber1(100,20,300,110,20,30,600);
console.log(`Total Sum01: ${result01}`);
console.log(`Total Sum02: ${result02}`);
console.log(`Total Sum03: ${result03}`);

//! another parameter vs rest parameter than rest parameter stay in last
const findSum = (message, ...multipleNumber ) => {
    let sum1 = 0;
    console.log(message);
    for (const number of multipleNumber) {
        sum1 += number;
    }
    return sum1;
}
const result = findSum('hi', 200, 400, 600);
console.log(`Find Sum1: ${result}`);

const result1 = findSum('hello', 100, 40, 60);
console.log(`Find Sum2: ${result1}`);

const result2 = findSum('bye', 20, 400, 1100);
console.log(`Find Sum3: ${result2}`);