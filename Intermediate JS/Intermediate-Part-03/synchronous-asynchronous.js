//! Synchronous vs Asynchronous programming
//? JS single thread, blocking, synchronous programming language
// console.log('Task 1 completed');
// console.log('Task 2 completed');
// const guest = Number(prompt("Enter a guess: "))
// console.log('Task 3 completed');
// console.log('Task 4 completed');
// console.log('Task 5 completed');

console.log('Task 1 completed');
console.log('Task 2 completed');
setTimeout(() =>{
    console.log('Task 3 completed');
}, 2000)
console.log('Task 4 completed');
console.log('Task 5 completed');
w
//! Promise Asynchoronous -> pending, resolve, reject
//! API Call
//? JS global object => window

console.log(fetch);