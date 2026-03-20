let value = 0;
console.log( value || 10 );

console.log( value ?? 10 );

let value1 = null;
let value2 = undefined;

//! null coalescing operator check only null and undefined false value

console.log( value1 ?? 10 );
console.log( value2 ?? 'Mokaddes' );

let profilePicture = undefined;
let defaultPicture = 'avatar.png';
console.log( profilePicture ?? defaultPicture );

let userName = undefined;
console.log( userName ?? "Guest" );