console.log( 'JS DOM' );
const box1 = document.getElementById("box1");
const allBox = document.querySelectorAll(".box");
const allBox2 = document.getElementsByClassName(".box");
const box3 = document.querySelector("#box3");
const box4 = document.getElementsByTagName('div');
box1.innerText = "Replace box with JS innerText";
box3.innerHTML = "<h3>Hello</h3> <p>This is paragraph</p>";
console.log( typeof box1.innerText );
console.log( typeof box3.innerHTML );

console.log( box1 );
console.dir( box1 );
console.log( typeof box1 );
{ setTimeout( () => {
     console.log( 'loading after five second' );
    console.log( allBox2 );
console.log(typeof allBox2 );
},5000
)
}
console.log( box3 );
console.log(typeof box3 );
console.log( box4 );
console.log(typeof box4 );
console.log( allBox );
console.log(typeof allBox );

// Select by attribute
const box1SelectByAttr = document.querySelector('[data-atr="box2"]');
box1SelectByAttr.innerText = "Select and replaced by Attribute";
