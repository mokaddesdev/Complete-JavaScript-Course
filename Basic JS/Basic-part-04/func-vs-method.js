//! Function Example
const add = (numb1, numb2) => numb1 + numb2;
const sub = (numb1, numb2) => numb1 - numb2;
const multi = (numb1, numb2) => numb1 * numb2;
const divi = (numb1, numb2) => numb1 / numb2;
const modu = (numb1, numb2) => numb1 % numb2;
console.log(add(10,5));
console.log(sub(10,5));
console.log(multi(10,5));
console.log(divi(10,5));
console.log(modu(10,5));

//TODO Method Example
//! When function use in object than call method
const calculator = {
    name : 'Mokaddes Ali',
    age : 25,
    cgpa : 3.16,
    add: (numb1, numb2) => numb1 + numb2, // method
    sub: (numb1, numb2) => numb1 - numb2, // method
    multi: (numb1, numb2) => numb1 * numb2, // method
    divi: (numb1, numb2) => numb1 / numb2, //method
    modu: (numb1, numb2) => numb1 % numb2, //method
}
console.log(calculator.name);
console.log(calculator.age);
console.log(calculator.cgpa);
console.log(calculator.add(80, 60));
console.log(calculator.sub(80, 60));
console.log(calculator.multi(80, 60));
console.log(calculator.divi(80, 60));
console.log(calculator.modu(80, 60));