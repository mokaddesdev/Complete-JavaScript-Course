function arguments5() {
    for( var i = 0; i <= arguments.length; i++ ) {
        console.log( 'Argument passed: ' + arguments[i]);
    }
}
arguments5('A', 'B', 'I', 'S');

/* const arguments6 = () => {
    for( var i = 0; i <= arguments.length; i++ ) {
        console.log( 'Argument passed: ' + arguments[i]);
    }
}
arguments6('A', 'B', 'I', 'S');
*/
function argumentsMethWork() {
    const argsArr = Array.prototype.slice.call(arguments);
    argsArr.map( function(oneArgs) {
        console.log('Arguments passed: ' + oneArgs );
    });

}
argumentsMethWork('A', 'B', 'I', 'S');

 function arguments51 (...anyName ) {
    for( var i = 0; i <= anyName.length; i++ ) {
        console.log( 'Argument passed: ' + anyName[i]);
    }
}
arguments51('A', 'B', 'I', 'S');

 const arguments6 = (...anyName ) => {
    for( var i = 0; i <= anyName.length; i++ ) {
        console.log( 'Argument passed: ' + anyName[i]);
    }
}
arguments6('A', 'B', 'I', 'S');

 const argumentsMeth6 = (...anyName ) => {
    anyName.map( oneArg => {
        console.log( 'Argument passed: ' + oneArg );
    })
}
argumentsMeth6('A', 'B', 'I', 'S');


const restExtra = (name, age, ...others ) => {
    console.log(`My name is ${name} and I am ${age} years old.`);
    others.map(other => console.log(`Aruments passed: ${other}`) );
}

restExtra("ali", 20, "adil", "jakiya", "anicha");