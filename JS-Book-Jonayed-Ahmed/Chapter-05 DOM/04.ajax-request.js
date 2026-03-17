/**
 * var request = new XMLHttpRequest;
 * request.open('GET','url', true);
 * request.send();
 * 
 * request.onreadystatechange = function handleRequst() {
 * console.log(request);
 * }
 */

const request1 = new XMLHttpRequest;
request1.open('GET', 'https://jsonplaceholder.typicode.com/post', true );
request1.send();
request1.onreadystatechange = function handleRequst(){
    console.log( request1.responseText);
}

const request = new XMLHttpRequest;
request.open('GET', 'https://jsonplaceholder.typicode.com/post', true );
request.send();
request.onreadystatechange = function handleRequst(){
    console.log( typeof request.responseText);

    //! JSON.parse => convert json to js object
    console.log( JSON.parse(request.responseText));
}

//? Ready state
const request2 = new XMLHttpRequest;
console.log(request2.readyState);
request2.open('GET', 'https://jsonplaceholder.typicode.com/post', true );
console.log(request2.readyState);

request2.send();
request2.onreadystatechange = function handleRequst(){

    console.log(request2.readyState);
    
}