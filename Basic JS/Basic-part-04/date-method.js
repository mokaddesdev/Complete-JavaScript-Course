console.dir(Date);
console.log(Date.now());
//current time show in 1279333569898 something miliseconds

//! string date to normal milisecond date
console.log(Date.parse('01 jun 2010'));
// show date in time miliseconds 7645685468546 something
Date.UTC()
const date = Date();
console.log(typeof date);
console.log(date);

// show current date
console.log( new Date() );
//? Structure => hence year and month required
// TODO new Date( year, month, DynamicsCompressorNode, hours, minutes, seconds, miliseconds );
console.log( new Date(1990, 9) );
// Mon Oct 01 1990 (Bangladesh Standard Time)
console.log( new Date(1999, 12, 32) );
// Mon Oct 01 1990 (Bangladesh Standard Time)
console.log( new Date(0) );

console.log( new Date(100000000000) );

const dateObj = new Date();
console.log( typeof  dateObj );
console.dir(dateObj)
console.log(`dateObj.getDate => ${dateObj.getDate()}`);
console.log(`dateObj.getDay => ${dateObj.getDay()}`);
console.log(`dateObj.getFullYear => ${dateObj.getFullYear()}`);
console.log(`dateObj.getHours => ${dateObj.getHours()}`);
console.log(`dateObj.getMilliseconds => ${dateObj.getMilliseconds()}`);
console.log(`dateObj.getMinutes => ${dateObj.getMinutes()}`);
console.log(`dateObj.getMonth => ${dateObj.getMonth()}`);
console.log(`dateObj.getSeconds => ${dateObj.getSeconds()}`);
console.log(`dateObj.getTime => ${dateObj.getTime()}`);
console.log(`dateObj.getFullYear => ${dateObj.getFullYear()}`);

const currentDate = new Date();
console.log( currentDate );
console.log(currentDate.toDateString());
console.log(currentDate.toISOString())
console.log(currentDate.toLocaleString())
console.log(currentDate.toLocaleDateString())
console.log(currentDate.toLocaleTimeString())
console.log(currentDate.getUTCFullYear())
console.log(currentDate.getUTCMonth())
console.log(currentDate.getUTCHours())