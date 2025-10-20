const products = require('./products.js');

function findProduct(productName) {
    const product = products.find(p => p.name === productName);
    
    if (product) {
        console.log(`Found Product:`);
        console.log(`  Name: ${product.name}`);
        console.log(`  Price: $${product.price}`);
        console.log(`  Category: ${product.category}`);
    } else {
        console.log(`Product "${productName}" not found.`);
    }
}

// Call the function with different product names
findProduct("Laptop");
console.log("--------------------");
findProduct("Book");
console.log("--------------------");
findProduct("Headphones"); // Example of a product not in the list