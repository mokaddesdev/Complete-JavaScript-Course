const capitalObj = {
    Bangladesh: 'Dhaka',
    India: 'Delhi',
    Nepal: 'Kathmandu',
    Afganisthan: 'Kabul',
    Thailand: 'Bangkok'
}
//? show key
console.log('print array key');
for (const capital in capitalObj) {
    console.log(capital);
}
console.log('\nshow key value');
//? show key value
for (const capital in capitalObj) {
    console.log( capitalObj[capital] );
}
//object constructor
console.dir(Object);
const capitals = Object.values(capitalObj);
console.log(capitals);
capitals.map( (capital) => {
    console.log('capital is: ' + capital);
} );
const countryNames = Object.keys(capitalObj);
countryNames.map( country => console.log(`country name: ${country}`) );

countryNames.map( country => console.log('Capital of ' + country + ' is : ' + capitalObj[country] ) );

//?simply in online
Object.keys(capitalObj).map( country => console.log('country is : ' + country + ' ' + 'capital is: ' + capitalObj[country] ) );