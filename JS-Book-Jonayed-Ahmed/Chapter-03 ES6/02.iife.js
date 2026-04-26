//! IIFE => Immediately Invoked Function Expressions

(function aDemoFunc(){
    var msg = "Coding by mokaddes ali";
    console.log( msg )
})()

{
    let a = 5;
    let b = 10;
    const pi = 3.1416;
    console.log( a + " " + b + " " + pi );
}

// console.log( a + " " + b + " " + pi ); //! ReferenceError: a is not defined

{
    var myname = function(){
        var a = "Mokaddes Ali";
        console.log(a)
    }
}
myname()

{
    const myNames = function(){
        const a = "mokaddes ali";
        console.log(a)
    } 
}

// myNames() //!ReferenceError: myNames is not defined