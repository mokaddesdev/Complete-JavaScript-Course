import { sum as addition, sub as minus } from "./calc.js";
import * as calc from "./calc.js";
import setName from "./whoami.js";
import * as combined from "./combine.js";

console.log(addition(20, 40));
console.log(minus(50, 30));
console.log(calc.sum(20, 40));
console.log(calc.sub(50, 30));
console.log(setName());

console.log('Combined module');
console.log(combined.calc.sub(10, 20));
console.log(combined.calc.sum(30, 40));
console.log(combined.myNameIs());

const { sayHi, sayHola } = await import('./greeting.js');

const promise = Promise.all([
  import('./greeting.js'),
  import('./calc.js'),
]);

// console.log(promise);
promise.then(result => {
    console.log( result[0].sayHi() );
    console.log( result[1].sum(30,40) );
});