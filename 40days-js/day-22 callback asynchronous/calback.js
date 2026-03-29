/*
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
*/

/*
function orderPizza( type, name ) {
    query(`https://dummyjson.com/products`, function( result, error ) {
        if ( ! error ) {
            let shopId = result[0];
            console.log( shopId );
        }
    }
)
}
orderPizza( 'veg', 'Mergherita' );
*/

function fetchProduct() {
    const fetchData = fetch( `https://dummyjson.com/products/1` )
    .then( res => {
            return res.json()
    })
    .then( data => {
        return console.log( data );
    }
    )
    .catch( error => console.log(error) );

    return fetchData;
}

// console.log( fetchProduct() );
fetchProduct();

const dummyProdutcs = ( endpoint, callback, options ) => {
    fetch( `https://dummyjson.com/${endpoint}`, options )
    .then( response => {
        return response.json();
    })
    .then( data => {
            return callback( data );
    })
}

const productData = ( data ) => {
    console.log( data );
}

dummyProdutcs( 'products', productData );

//! - Promise
//! - async/await keywords
//! Event Loop