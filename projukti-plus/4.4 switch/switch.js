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