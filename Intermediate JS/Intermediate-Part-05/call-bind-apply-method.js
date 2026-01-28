//! call() method
const myCustomObj = {
    name : 'Mokaddes Ali',
    age : 24,
    job : 'student',
    anotherObj : {
        name : 'Ahnaf Adil',
        value : function() {
            console.log('my name is ' + this.name);
        }
    }
}

myCustomObj.anotherObj.value();
console.log( 'custome name show select object' );
myCustomObj.anotherObj.value.call( myCustomObj );

const abdurRahim = {
    name : 'Abdur Rahman',
    dob : 2000,
    age : function( curentYear, msg ) {
        console.log( this.name + ' is ' + (curentYear - this.dob) + ' years of old' + ' and message ' + msg );
    },
}

const abdulKarim = {
    name : 'Abdul Karim',
    dob : 1996,
}
abdurRahim.age(2026);
abdurRahim.age.call( abdulKarim, 2026 );

//! Apply() method
myCustomObj.anotherObj.value.apply(myCustomObj);
abdurRahim.age(2026, 'Hello World!');
abdurRahim.age.apply( abdulKarim, [2026, 'Hello World!'] );

//! bind() method
console.log('use bind method');
const anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj);
console.log( anotherFunc );
anotherFunc();
const abdulKarimAge = abdurRahim.age.bind( abdulKarim, 2026);
abdulKarimAge('Hello World !');