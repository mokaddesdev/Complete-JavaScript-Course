/**
 * Switch case
 * 
 * switch( expression ) {
 *      case value:
 *          code
 *          break;
 *      case value:
 *          code
 *          break;
 *      case value:
 *          code
 *          break;
 *      default :
 *          code
 *  }
 */

// let orderStatus = 'pending';
let orderStatus = 'cancel';

switch( orderStatus ) {
    case 'pending' :
        console.log('Your order is being processed');
        break;
    case 'confirm' :
        console.log( 'Your order has been confirmed' );
        break;
    case 'cancel' :
        console.log( 'Your order is cancel' );
        break;
    case 'shipped' :
        console.log( 'Your order is shipped' );
        break;
    case 'delivered' :
        console.log( 'Your order is delivered' );
        break;
    default :
        console.log( 'No status match' );
}

//! Another example  => find marks

let marks = parseInt( prompt( 'Enter your marks' ) );

switch( true ) {
    case( marks >= 80 && marks <= 100 ) :
    console.log( 'Your GPA A+' );
    break;

    case( marks >= 70 && marks <= 79 ) :
    console.log( 'Your GPA A' );
    break;

    case( marks >= 60 && marks <= 69 ) :
    console.log( 'Your GPA A-' );
    break;

    case( marks >= 50 && marks <= 59 ) :
    console.log( 'Your GPA B' );
    break;

    case( marks >= 40 && marks <= 49 ) :
    console.log( 'Your GPA C' );
    break;

    case( marks >= 33 && marks <= 39 ) :
    console.log( 'Your GPA D' );
    break;

    case( marks >= 0 && marks <= 32 ) :
    console.log( 'You are failed.' );
    break;

    default :
    console.log( 'Invalid input. Please enter number 0 to 100 than try again')
}