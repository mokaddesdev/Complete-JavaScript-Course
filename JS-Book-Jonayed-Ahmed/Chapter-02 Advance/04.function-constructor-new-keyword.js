//! Function constructor and new keyword
/**
 * 1.Array()
 * 2.String()
 * 3.Number()
 * 4.Boolean()
 * 5.Date()
 * ..........
 */

const samir = {
    name: 'Samir islam',
    age: 25,
    job: 'student',
}

const kinan = {
    name: 'Kinan islam',
    age: 34,
    job: 'student',
}
const mokaddes = {
    name: 'Mokaddes Ali',
    age: 25,
    job: 'employee',
}

const Person = function( name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const Person1 = function( nameArg, ageArg, jobArg ) {
    this.name = nameArg;
    this.age = ageArg;
    this.job = jobArg;
}

const abdulKarim = new Person('Abdul Karim', 30, 'student');
console.log( abdulKarim.name );
console.log( abdulKarim.age );
console.log( abdulKarim.job )
//? make infinity object from the constructor function


const Personwithmethod = function( name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function() {
        console.log( this.name + ' is born in ' + (2026 - this.age ) );
    }
}

const mokaddesali = new Personwithmethod('Mokaddes Ali', 25, 'student');
console.log( mokaddesali.dateOfBirth() );