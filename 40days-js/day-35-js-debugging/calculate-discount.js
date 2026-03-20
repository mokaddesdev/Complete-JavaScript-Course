const calculateDiscount = ( total ) => {
    let discount = 0;

    if ( total >= 500 ) {
        discount = 0.10;
    } else if( total >= 300 ) {
        discount = 0.15;
    } else if ( total >= 100 ) {
        discount = 0.20;
    }

    return total - total*discount;
}
console.log( calculateDiscount(50) );
console.log( calculateDiscount(150) );
console.log( calculateDiscount(350) );
console.log( calculateDiscount(600) );