import { sub } from "./sub.js";
import { add } from "./add.js";
import { person } from "./person.js";
import newUser from "./users.js"

console.log( add( 50, 60 ) );
console.log( sub( 60, 80 ) );
const data = person(); 

console.log(data.name);
console.log(data.age);
data.printInfo(data);
console.log(newUser);