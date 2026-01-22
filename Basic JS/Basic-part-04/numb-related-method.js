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