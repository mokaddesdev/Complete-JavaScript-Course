//! IIFE => Immediately Invoked Function Expressions
/**
 * IIFE Structure => ()()
 * (function(parameters){})(arguments)
 * 
 * (setTimeOut(){}())
 */

function aDemo(){
    console.log("Hello World!");
}

var aDemoFunc = function(){
    console.log("Hello World!");
}

aDemo();
aDemoFunc();

//! IIFE

(function aDemo(){
    console.log("Hello World!");
})()

var aDemoFunc = (function(){
    console.log("Hello World!");
})()

var controller = (function(){
    var a = {
        name : "Mokaddes Ali",
        uid : 123,
    };
    return a;
})()

var interface = (function(){
    var data = console.log('Hello ' + controller.name);
    return data;
})()