const js = "Welcome to JavaScript String Method Practice";

console.log(js.length);
//! find string letter
console.log(js[22]);
console.log(js[11]);
console.log(js.charAt(22));

console.log(js.substr(4,8)); // curt 4 to 8
//! index number theke one km asbe.
console.log(js.substring(4,8)); // curt 4 to 7
console.log( js.toUpperCase() );
console.log( js.toLowerCase())

//! splite means space thre venge naoya and make subset => string to sub string
console.log( js.split(" ") )

//! remove both side ( first and last) unnessary space
console.log( js.trim(" ") );

//! check a part with inlude method => true or false bollean value
console.log( js.includes("Ali"));  //boolean
console.log( js.includes("JavaScript")); // boolean

//! search find first alphabet index
console.log( js.search("JavaScript")); // index number

//! replace any word
console.log( js.replace("JavaScript", "PHP")); // replace

//! Find ASCII code
console.log( js.charCodeAt(2))
console.log( js.charCodeAt(1))
console.log( js.charCodeAt(8))

//! Find index number
console.log( js.indexOf("J"))
console.log( js.indexOf("a"));
console.log( js.indexOf("P"));

//! sub string to string
console.log( js.concat(" JavaScript New Data" + " " + " Type "));

//! repeat string three time
console.log( js.repeat(3));