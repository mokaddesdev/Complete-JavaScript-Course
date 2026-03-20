let userName = "Mokaddes Ali";
let userCountry = "Bangladesh";
let userAge = 18;
let orderId = 1234;
let amount = 1200;
let appName = "Projukti Plus";
let courseName = "JavaScript";

console.log( "Welcome to " + appName + " ," + "User name: " + userName );

//! Template Literal
console.log(`Welcome to ${appName} to ${userName}`);
console.log(`Your selected course ${courseName} and your order successfully ${orderId} with total amount to pay $${amount}`);

console.log("Order details:\n---------");
console.log("Customer\t" + userName );
console.log("Location:\t " + userCountry );

console.log("product name: \"JavaScript Guide Book\"");

console.log("product name: \'JavaScript Guide Book\'");
console.log("Author's note");

let invoice = `Invoice Summary
-------------
Customer: ${userName}
Country: ${userCountry}
Amonut: ${amount}
Course: ${courseName}
Order Id: ${orderId}`;
console.log(invoice);