console.log( "Assync JavaScript - callback" ); // synchronous
setTimeout( () => {
    console.log( "waiting done after two second." );
}, 2000) // asynchronous
console.log( 'first' ); // synchronous
console.log( 'moiddle' ); // synchronous
console.log( 'end' ); // synchronous

//! - Callback
const callbackFn = () => {
    console.log( "Callback  function" );
}

//* Higher order function
function greet( name, callback ) {
    console.log( `say hello ${name}`);
    setTimeout( () => {
        callback();
    }, 2000)
}
//? callback function
function sayText() {
    console.log( 'I am a call back function after 2 seconds' );
}

greet( 'Mokaddes', sayText );

function orderPizza( type, name ) {
    query(`api/pizzahub/`, function( result, error ) {
        if ( ! error ) {
            let shopId = result[0];
            console.log( shopId );
            let result =
        }
    }
)
}
orderPizza( 'veg', 'Mergherita' );

//! - Promise
//! - async/await keywords
//! Event Loop