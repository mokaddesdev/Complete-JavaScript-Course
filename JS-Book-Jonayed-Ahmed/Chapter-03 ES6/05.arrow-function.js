var aFunc = function(){
    console.log('A demo function ES5 function expression');
}
aFunc()

const aFunc6 = () => console.log('A demo function ES6 function expression');
aFunc6()

const dob = [1996, 1986, 2017, 1989];

const currentAge5 = dob.map(function(oneDob){
    return console.log(2026 - oneDob);
})
currentAge5

const currentAge6 = dob.map( oneDob => 2026 - oneDob );