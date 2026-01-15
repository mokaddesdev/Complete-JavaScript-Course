//! Use Map(), Filter(), Some(), Every(), Reduce(), Sort()

const products = [
    { id :1, name : 'Tecno Spark 5Pro', brand : 'Tecno', category : 'mobile', price : 15000, createdAt : new Date(2024-12-26) },
    { id :2, name : 'Sumsung Galaxy', brand : 'Sumsung', category : 'mobile', price : 25000, createdAt : new Date(2023-2-21) },
    { id :3, name : 'iPhone s16 Pro', brand : 'Apple', category : 'mobile', price : 15000, createdAt : new Date(2021-1-12) },
    { id :4, name : 'Daynabook 40c Pro', brand : 'Toshiba', category : 'laptop', price : 45000, createdAt : new Date(2025-8-27) },
    { id :5, name : 'HP Elite 40c Pro', brand : 'HP', category : 'laptop', price : 55000, createdAt : new Date(2026-1-12) },
];

//? Use map()
products.map( ( product ) => {
    console.log( `product.name: ${ product.name }` );
    console.log( `product.category: ${ product.category }`  );
    console.log( `product.price: ${ product.price }` );
} );

//? Use filter()
const filterProduct = products.filter( ( product ) => {
    return product.price > 20000;
} );
console.log( filterProduct  );

//? Use filter() and map() both
console.log(`product.price >= 35000 by filter() and show data by map()`);
const filterProduct1 = products.filter( product => {
    return product.price >= 35000;
} );
filterProduct1.map( product => {
    console.log( product.name );
    // console.log( product.category );
    console.log( product.price );
} );

//TODO Filter in both range console.log(`product.price >= 35000 by filter() and show data by map()`);
console.log('filterProductRange');
const filterProductRange = products.filter( product => {
    return product.price <= 45000 && product.price >= 15000;
} );
filterProductRange.map( product => {
    console.log( product.name );
    // console.log( product.category );
    console.log( product.price );
} );

//TODO search By Filter exact value
console.log( `search By Filter exact product Tecno Spark 5Pro ` );
const searchProduct = products.filter( ( product ) => {
    return product.name === 'Tecno Spark 5Pro';
} );
searchProduct.map( product => {
    console.log( product.name );
} );

//TODO search By Filter expected value
console.log( `search By Filter expected value` );
const searchProduct1 = products.filter( ( product ) => {
    return product.name.includes ('Tecno');
} );
searchProduct1.map( product => {
    console.log( product.name );
} );

//TODO search By Filter lower or uppercase
console.log( `search By Filter lower or uppercase by category` );

const searchProduct2 = (searchProduc) => {
    return products.filter((product) => {
        return product.category
            .toLowerCase()
            .includes(searchProduc.toLowerCase());
    });
};

const result = searchProduct2('mobile');

result.map((product) => {
    console.log(product.category);
    console.log(product.name);
});


//! Use reduce() all value in one value or find sum

//? use for loop
let totalPrice = 0;
for( let index = 0; index<products.length; index++ ) {
    totalPrice += products[index].price;
}
console.log( `You have to pay in total amount: ${ totalPrice }` );

//? Use forEach
let totalPrice1 = 0;
products.forEach( (product) => {
    return totalPrice1 += product.price;
} );
console.log( `Products totalPrice1: ${ totalPrice1 }` );

//! Use Reduce()
const totalPric = products.reduce( ( acc, product ) => {
    return acc += product.price;
}, 0);
console.log(`total product price by reduce : ${ totalPric }`);

//! Use Map() and Reduce()
const totalProduct = products
.map( product => product.price )
.reduce( ( acc, currentPrice ) =>{
    return acc + currentPrice;
}, 0 );
console.log(`totalProduct: ${totalProduct}`);

//! Use some() function
const hasPrice = products.some( ( product ) => {
    return product.price > 50000;
} );
console.log( `atleast one product price > 50000 : ${hasPrice}` );

//! Use every() function
const everyPrice = products.every( product => {
    return product.price > 35000;
} );
console.log( `All product price > 35000 : ${everyPrice}`);

//! Use sort() function
//? Sort by product price
console.log('Product Sort by price');
const productSortByPrice = products.sort( (a,b) => {
    // return a.price - b.price; //TODO ascending order
    return b.price - a.price; //TODO descending order
} );
console.log( productSortByPrice );

//? Sort by product name
console.log('Product Sort by name');
const sortByProductName = products.sort( ( a, b ) => {
    // return a.name.localeCompare(b.name); //TODO ascending order
    return b.name.localeCompare(a.name); //TODO descending order
} );
console.log( sortByProductName );

//? Sort by date
console.log('Product Sort by date');
const sortByCreateDate = products.sort( ( a,b ) => {
    return new Date(b.createdAt - a.createdAt);  //TODO descending order
} );
console.log( sortByCreateDate );
