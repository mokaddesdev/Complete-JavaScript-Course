//! Template literal => ``

const name = "Mokaddes Ali";
const age = 26;
const job = "Student";

console.log( `My name is ${name}. I'm a ${age} years old. I'm a ${job}` );

const calculateAge = (dob) =>{
    return console.log(`I'm ${2026 - dob} years old`);
}
calculateAge(2000);


//! Tagged Templates

const aFunc = function(string, name, age){
    console.log('String:');
    console.log(string);
    console.log(`name: ${name}`);
    console.log(`String: ${age}`)
}

aFunc();
aFunc`I'm a ${name} and ${age} years old`;