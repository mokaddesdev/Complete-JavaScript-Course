//! JSON => JavaScript Object Notation

//TODO Defference between JSON vs JavaScript Object
//? keyword word must in "" in json but js objcet no need "" for keyword

//! JS Object
const user = { fullName: 'Mokaddes Ali', city : 'Dhaka'}

//!JSON
const userJSON = { "fullname" : "Mokaddes Ali", "city" : "Rajshahi"}

const person = {
    firstName : 'Mokaddes',
    age : 25,
    city : 'Rajshahi',
}
//! convert JavaScript Object to JSON
//? JSON.stringify vs JSON.parse
const personJson = JSON.stringify( person );
console.log( personJson );

const personObject = JSON.parse( personJson );
console.log( personObject );

//! localstorage
//? localstorage.setItem(key, value), localstorage.getItem(key), localstorage.removeItem(key), localstorage.clear()
const userInfo = {
    username : "Mokaddes Ali",
    password : '123456',
    loginStatus : true,
}
// console.log(userInfo);
localStorage.setItem("loginData", JSON.stringify(userInfo));
const userData = localStorage.getItem("loginData") ? JSON.parse( localStorage.getItem("loginData") ) : null;
console.log( userData );

//Reomove data from local
try{
    localStorage.removeItem('loginData');
} catch(error) {
    console.log(error.message);
}

//Clear all key from local storage
localStorage.clear();