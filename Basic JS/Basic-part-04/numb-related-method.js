const num = 12.3456;
//? show after point how many digit show
const toFixedValue = num.toFixed(3);
console.log( `toFixedValue = ${toFixedValue}` );
//? show total digit from start
const parseNumber = num.toPrecision(3);
console.log(`parseNumber = ${parseNumber}`);
//?Convert string
const stringNum = num.toString();
console.log( typeof( stringNum ) );
console.log(`stringNum: ${stringNum}`);
//?parseInt()
//?parseFloat()
const numb = 12.3456;
//! Number related Math Method
//? . theke kto digit show krabe
console.log(numb.toFixed(2));

//? . sho all kto digit show krabe
console.log(numb.toPrecision(3));

//? Convert data in string
console.log(numb.toString());
console.log(typeof numb.toString());

//? show in parse integer number
console.log(parseInt(numb));

//? show in parse float number
console.log(parseFloat(numb));