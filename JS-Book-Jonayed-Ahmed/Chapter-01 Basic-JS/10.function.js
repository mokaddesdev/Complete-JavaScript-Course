const sumMechine = ( number1, number2 ) => {
    const sum = number1 + number2;
    return sum; 
}

console.log( sumMechine( 20, 30 ) ); 
console.log( sumMechine( 40, 70 ) );


const myInfo = ( name, age ) => {
    console.log( 'My name is ' + name + ' I am ' + age + ' years old' );
}
console.log( myInfo( "Adil Ahnaf", 2 ) );

const printMyInfo = ( name, callback ) => {
    const myAge = 25;
    callback( myAge );
    console.log( `My name is ${name} and I am ${myAge} years old.` );
}

const hello = age => {
    console.log( 'I am passed through argument and my age is:' + age );
}

printMyInfo( 'Mokaddes Ali', hello)