let greetings = "hello";
console.log(greetings[1]); // "e"
console.log(greetings[greetings.length - 1]); // "o"

let firstTwo = greetings[0] + greetings[1]; // "he"
console.log(firstTwo);

let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"

let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!

const name = "Alice";
const greeting1 = `Hello, ${name}!`;

console.log(greeting1);

const age = 25;
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message); 
const templateMessage = `My name is ${name} and I am ${age} years old.`;
console.log( templateMessage );

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14
let sentence2 = "JavaScript is awesome, and JavaScript is powerful!";
let position2 = sentence2.indexOf("JavaScript", 10); //! begins after the 10th character
console.log(position2); // 27

console.log("freeCodeCamp".indexOf("F")) // -1

// prompt(message, default);

const openPrompt = document.getElementById("prompt-btn");
const showOutput = document.getElementById("output");
openPrompt.addEventListener( "click", () => {
    const userName = prompt( "What is your name?", "Guest" );
    showOutput.textContent = "Hello" + userName;
});