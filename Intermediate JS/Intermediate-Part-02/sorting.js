const products = [
    { id: 1, name: 'Tecno Spark 5Pro', brand: 'Tecno', category: 'mobile', price: 15000, createdAt: new Date(2024, 11, 26) },
    { id: 2, name: 'Sumsung Galaxy', brand: 'Sumsung', category: 'mobile', price: 25000, createdAt: new Date(2023, 1, 21) },
    { id: 3, name: 'iPhone s16 Pro', brand: 'Apple', category: 'mobile', price: 15000, createdAt: new Date(2021, 0, 12) },
    { id: 4, name: 'Daynabook 40c Pro', brand: 'Toshiba', category: 'laptop', price: 45000, createdAt: new Date(2025, 7, 27) },
    { id: 5, name: 'HP Elite 40c Pro', brand: 'HP', category: 'laptop', price: 55000, createdAt: new Date(2026, 0, 12) },
];

const printProducts = (products) => {
    console.log(JSON.stringify(products, null, 2));
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

const choice = prompt('Enter string 1-6');
let sortedProducts = [...products];

switch (choice) {
    case '1':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;

    case '2':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;

    case '3':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;

    case '4':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;

    case '5':
        sortedProducts.sort((a, b) => a.createdAt - b.createdAt);
        break;

    case '6':
        sortedProducts.sort((a, b) => b.createdAt - a.createdAt);
        break;
}

printProducts(sortedProducts);

//! Create a function for all operator
const sortOperation = () => {
    
}