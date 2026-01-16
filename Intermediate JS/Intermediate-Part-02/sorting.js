const products = [
    { id: 1, name: 'Tecno Spark 5Pro', brand: 'Tecno', category: 'mobile', price: 15000, createdAt: new Date(2024, 11, 26) },
    { id: 2, name: 'Sumsung Galaxy', brand: 'Sumsung', category: 'mobile', price: 25000, createdAt: new Date(2023, 1, 21) },
    { id: 3, name: 'iPhone s16 Pro', brand: 'Apple', category: 'mobile', price: 15000, createdAt: new Date(2021, 0, 12) },
    { id: 4, name: 'Daynabook 40c Pro', brand: 'Toshiba', category: 'laptop', price: 45000, createdAt: new Date(2025, 7, 27) },
    { id: 5, name: 'HP Elite 40c Pro', brand: 'HP', category: 'laptop', price: 55000, createdAt: new Date(2026, 0, 12) },
];
// function to display menu
const displayMenu = () => {
    const menu = `
        1. Sort By Name(A-Z)
        2. Sort By Name(Z-A)
        3. Sort By Price(Low to High)
        4. Sort By Price(High to Low)
        5. Sort By date(old to newrest)
        6. Sort By date(newrest to old)
        `
    return menu;
}
const printProducts = ( productsArray ) => {
    console.log(JSON.stringify(productsArray, null, 2));
};

// const choice = '2';
// let sortedProducts = [...products];

// switch (choice) {
//     case '1':
//         sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
//         break;

//     case '2':
//         sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
//         break;

//     case '3':
//         sortedProducts.sort((a, b) => a.price - b.price);
//         break;

//     case '4':
//         sortedProducts.sort((a, b) => b.price - a.price);
//         break;

//     case '5':
//         sortedProducts.sort((a, b) => a.createdAt - b.createdAt);
//         break;

//     case '6':
//         sortedProducts.sort((a, b) => b.createdAt - a.createdAt);
//         break;
// }

// printProducts(sortedProducts);

//! copy product array in another array
let productsArray = [...products];

//! soritng function
const sortByNameAZ = ( productsArray ) => {
    return productsArray.sort((a, b) => a.name.localeCompare(b.name));
}

const sortByNameZA = ( productsArray ) => {
    return productsArray.sort((a, b) => b.name.localeCompare(a.name));
}

const sortByPriceLowToHigh = ( productsArray ) => {
    return productsArray.sort((a, b) => a.price - b.price);
}

const sortByPriceHighToLow = ( productsArray ) => {
    return productsArray.sort((a, b) => b.price - a.price);
}

const sortByDateOldToNew = ( productsArray ) => {
    return productsArray.sort((a, b) => a.createdAt - b.createdAt);
}

const sortByDateNewToOld = ( productsArray ) => {
    return productsArray.sort((a, b) => b.createdAt - a.createdAt);
}

console.log(displayMenu());
const choice = prompt('Enter string 1-6');


switch (choice) {
    case '1':
        sortByNameAZ(productsArray);
        printProducts( productsArray );
        break;

    case '2':
        sortByNameZA(productsArray);
        printProducts( productsArray );
        break;

    case '3':
        sortByPriceLowToHigh(productsArray);
        printProducts( productsArray );
        break;

    case '4':
        sortByPriceHighToLow(productsArray);
        printProducts( productsArray );
        break;

    case '5':
        sortByDateOldToNew(productsArray);
        printProducts( productsArray );
        break;

    case '6':
        sortByDateNewToOld(productsArray);
        printProducts( productsArray );
        break;

    default:
        console.log('Invalid Choice');
}


//! Create a function for all operator
const sortOperation = () => {
    
}