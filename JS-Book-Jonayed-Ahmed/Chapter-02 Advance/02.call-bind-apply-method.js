//! call() method, bind() method, apply() method
//TODO call() method
const myCustomObj1 = {
    name: 'Mokaddes Ali',
    age: 25,
    job: 'student',
    msg: function() {
        console.log( this );
    }
}

const myCustomObj2 = {
    name: 'Mokaddes Ali',
    age: 25,
    job: 'student',
    anotherObj: { 
        name: 'Ahnaf Adil',
        msg: function() {
        console.log( `My name is ${this.name}` );
    }
    }
}
console.log( myCustomObj2.anotherObj.msg() );

console.log( myCustomObj2.anotherObj.msg.call(myCustomObj2) );

const abdulKarim = {
    name: 'Abdul karim',
    dob: 1996,
    age: function( currentYear ) {
        console.log( this.name + ' is ' + (currentYear- this.dob) + ' years of old. ' );
    }
}

const abdurRahim = {
    name: 'Abdur Rarim',
    dob: 1996,
}

console.log( abdulKarim.age(2018) );

console.log( abdulKarim.age.call(abdurRahim, 2026))

//TODO aplly() method
console.log( myCustomObj2.anotherObj.msg.apply(myCustomObj1))