//! Dot notation ব্যবহার করা হয় তখনই, যখন property নামটি fixed এবং valid identifier হয়। কিন্তু dynamic বা string-based property নামের ক্ষেত্রে কাজ করে না। 
//!bracket notation property নাম string আকারে নেয় এবং variable ব্যবহার করতে পারে, তাই এটি বেশি flexible। যখন property নামের মধ্যে space, dash থাকে বা property নাম dynamic হয় (যেমন API বা user input থেকে আসে), তখন bracket notation ব্যবহার করা হয়।

const obj = {
    property : 'value',
}
//! dot notation
console.log(obj.property);
//! brackets notation
console.log(obj['property']);

const person = {
    name : 'Mokaddes Ali',
    age : 25,
    job : 'student',
}
console.log('My name is ' + person.name);

const personName = 'name';
// undefined value
console.log('use dot notation person.personName: ' + person.personName);
console.log( 'use brackets notation person[personName]: ' + person[personName]);

const anyObj = {
    student : 'A property name to match with previous one'
}
console.log(anyObj[person.job]);

//? use dot and brackets notation in loop
for( aVal in person ) {
    console.log(`aval is here: ${aVal}`);
}
console.log('print with brackets notation');
for( aVal in person ) {
    console.log(`aval is here: ${person[aVal]}`);
}
console.log('print with dot notation');
for( aVal in person ) {
    console.log(`aval is here: ${person.aVal}`);
}