//! Wrapper Function => Wrapper function -> premitive data type convert into object data type
const string = 'My Name is Mokaddes Ali';
console.log(string)
console.dir(string);
console.log('string.length = ' + string.length );

//? String wrapper
const stringWrapper = new String( 'My name is milon hossain' );
console.dir(stringWrapper);

//? Number wrapper
const numberWrapper = new Number(10);
console.dir(numberWrapper);

const booleanWrapper = new Boolean(true);
console.dir(booleanWrapper)