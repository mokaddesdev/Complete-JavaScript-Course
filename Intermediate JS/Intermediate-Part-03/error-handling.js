//! Error

//? 1.1 Syntax Error => missing parenthesis, semicolon, variable name etc
/**
 * if( 6 > 5 
 * console.log( 'hello world);
 * 
 */

//? 1.2 Reference Error Accessing a variable that has not been declared or not in the scope
/**
 * console.log(x);
 * x is not define than reference error
 * 
 */

//? 1.3 Type Errors => performing an operation that does not match with the data type
/**
 *  let x = 2;
 * x = x.toUpperCase();
 * console.log(x);
 */

//? 1.4 Range Error => going outside of the allowed range
/**
 * let array = [1, 2, 3];
 * array[5] = 10;
 * console.log(array[5]);
 * 
 */

//? 1.5 NetWork Error => failed fetch request due to network problem




//? console.aula("This s an error.");

//! 1. Try Statement
//! 2. catch statement

try{
     console.aula("This s an error.");

}catch( error ){
    console.log('Do Anythiing here');
    console.log( error);
}


 //! 3. Throw Statement

const age = 25;

try{
     if( age < 18){
        throw ("Your are too young");
     }else{
        console.log("Your are too adult");
     }
}catch( error) {
    console.log( error);
}


//* 4. Finally statement

try{
        throw "An Error"

}catch( error ){
    console.log(error);
}finally{
    console.log(" I will run always");

}

//! new Error object

const yourAge = 10;
const anError = new Error(' You are too young ');

try{
    if( yourAge < 18){
        throw anError;
    }else{
      console.log( 'you are adult')
    }
}catch(error){
    console.log(error);
}
//! 2. Exception Handling: try, catch, finally, throw and throws

try{
    console.log(x);
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    // must or always execute hbe
    console.log('Today is Friday');
}

const user = { fullName: 'Mokaddes Ali', age: 17 }
try{
    console.log( user.nationality );
    // console.log(user..age);
} catch(errors) {
    console.error(errors);
}
finally{
    console.log('good bye');
}


const isElegibilityForVote = (age1) => {
    if( age1 < 18 ){
    throw new Error('Invalid age for vote eligibility')
}
return 'Welcome for vote'
}
try{
 isElegibilityForVote(16);
} catch(error){
    console.log(error.message);
}


