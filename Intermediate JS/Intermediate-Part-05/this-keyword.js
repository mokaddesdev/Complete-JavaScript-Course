console.log(this);
console.log( this === window );

// function helloThis() {
//     console.log(this);
// }
// helloThis();

function helloThis() {
    'use strict'; //! in strict mode not working this
    console.log(this);
}
helloThis();

function unName() {
    this.name = 'Mokaddes Ali';
}
unName();
console.log(name)

//! this keyword use in object
const myCustomObj = {
    name: 'Mokaddes Ali',
    age : 25,
    job : 'Student',
    msg: function() {
        console.log(this)
    }
}
myCustomObj.msg();

const myCustomObj1 = {
    name : 'Mokaddes Ali',
    age : 25,
    job: 'student',
    anotherObj : {
        name : 'Milon Hossain',
        msg: function() {
            console.log('My name is ' + this.name);
        }
    }
}
myCustomObj1.anotherObj.msg();

const myCustomObj2 = {
    name : 'Mijanur Rahman',
    age : 17,
    job : 'Day Labour',
    anotherObj : {
        name : 'Munna Islam',
        value : function () {
            console.log( this );
        }
    }
}
myCustomObj2.anotherObj.value();
myCustomObj2.anotherObj.value.call( myCustomObj2 );