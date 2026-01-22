console.log(Math);
console.log(`PI value:` + Math.PI);

const calCulatePow = Math.pow(10, 3);
console.log( ` 10 to the power 3 value: ` + calCulatePow);

//! Floor number convert in Integer remove . and show only integer number
//? output 10
console.log( `Floor number convert in Integer: ` + Math.floor(10.50));

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 12, 13, 20, 30, 50, 60];
const findMax = Math.max(...arrayNumber);
console.log(`Find Maximum Number = ${findMax}`);

const findMin = Math.min(...arrayNumber);
console.log(`Find Minimum Number = ${findMin}`);

/**
 * Random Number
 * 
 */
console.log(Math.random() * 10000 );

//? remove - sign from number
console.log(Math.abs(-34));

//? calculate square 
console.log(Math.sqrt(25));

//? Find maximum
console.log(Math.max(20,30));

//? Find Minimum
console.log(Math.min(20,30));

//? 0.98 hleo . ar prer digit bad diye integer krbe
console.log(Math.floor(12.345678));

//? .50 or upto 0.50 number hleo 1 thre integer a convert krbe
console.log(Math.round(3.5999));
//! output 4
console.log(Math.round(3.50));
//! output 4
console.log(Math.round(7.33));
//! output 7

//? .50 up hle 1 thrbe
console.log(Math.ceil(2.56));
//! output 3
console.log(Math.ceil(2.49));
//! output 3
console.log( Math.ceil(1.1) ); //2
console.log( Math.ceil(1.5) ); //2
console.log( Math.ceil(1.9) ); //2

console.log(Math.trunc(11.250));
console.log(Math.trunc(11.750));
console.log(Math.trunc(-4.1)); // -4  ❗
console.log(Math.floor(-4.1)); //-5
//! Math.random() প্রথমে 0 থেকে 1 এর মধ্যে একটি random decimal সংখ্যা দেয়। এরপর সেটাকে 5 দিয়ে multiply করলে রেঞ্জ হয়ে যায় 0 থেকে 4.999... পর্যন্ত। Math.floor() ব্যবহার করার ফলে দশমিক অংশ বাদ পড়ে এবং শুধু পূর্ণ সংখ্যা পাওয়া যায় (0, 1, 2, 3, 4)। সবশেষে +1 যোগ করার কারণে রেজাল্ট 1 থেকে 5 এর মধ্যে সীমাবদ্ধ থাকে। এইভাবে কোডটি প্রতিবার রান হলে 1 থেকে 5 এর মধ্যে একটি random integer দেখায়।

console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 1000000) + 1000);
