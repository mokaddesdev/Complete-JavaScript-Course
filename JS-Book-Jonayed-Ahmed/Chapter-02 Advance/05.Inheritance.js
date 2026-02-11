//!
const person = function( name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const teacher =  function( name, age, job, subject ) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.subject = subject;
}

//! prototype based inheritance
const personOnly = function( name, age, job ) {
    this.name = name;
    this.age = age;
    this.job = job;
}

personOnly.prototype.dateOfBirth = function() {
    console.log( this.name + ' born on ' + (2018 - this.age ) );
}
console.log( personOnly.prototype );

const mokaddes = new personOnly('mokaddes ali', 25, 'student');
mokaddes.dateOfBirth();
console.log(mokaddes)

const anotherObj = new personOnly( 'Ahnaf Adil', 2, 'child' );
console.log(anotherObj);

//* add variable with prototye chain
personOnly.prototype.address = 'Bangladesh';
console.log( mokaddes.address )

//! constructor inheritance
const Teacher = function( name, age, job, subject) {
    person.call(this, name, age, job);
    this.subject = subject;
}

const teacherObj = new Teacher( 'Shahin Islam', 53, 'Teacher', 'Math' );
console.log(teacherObj)
console.log(teacherObj.name)
console.log(teacherObj.age)
console.log(teacherObj.subject)
console.log(teacherObj.job)