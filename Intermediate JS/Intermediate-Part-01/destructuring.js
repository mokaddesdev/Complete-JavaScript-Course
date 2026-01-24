//! Concept: Destructuring

//! Destructuring in object
const person1 = { name : 'Mokaddes Ali', age: 26 } 
const newPerson1 = { ...person1, city : 'Dhaka', lang : 'English' }

console.log(newPerson1.name);
console.log(newPerson1.city);
console.log(newPerson1.age);
console.log(newPerson1.lang);

//? Destructuring
const { name, city, age, lang } = newPerson1;
console.log(name);
console.log(age);
console.log(lang);
console.log(city);

//? Rename destructuring 
console.log('Change name destructuring');
const { name:f_name, city : pcity, age : page, lang : plang } = newPerson1;
console.log(f_name);
console.log(page);
console.log(plang);
console.log(pcity);

//! Destructuring in array
const colors = [ 'red', 'blue', 'green' ];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
//? Destructure array
const [ first,second,third ] = colors;
console.log(first);
console.log(second);
console.log(third);

const mokaddes = [ 'Mokaddes Ali', 26, 'Dhaka', 'English' ];
const [ fname, fage, fcity, flang ] = mokaddes;
console.log(fname);
console.log(fage);
console.log(fcity);
console.log(flang);