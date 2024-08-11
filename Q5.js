// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

// Inventory constructor function
function Inventory() {
    this.products = [];
}

// Adding methods to Inventory prototype
Inventory.prototype.addProduct = function(product) {
    if (product instanceof Product && product.name && product.category && typeof product.price === 'number' && typeof product.stock === 'number') {
        this.products.push(product);
        console.log(`Product "${product.name}" added successfully.`);
    } else {
        console.log('Invalid product. Please provide a valid Product object with proper properties.');
    }
};

Inventory.prototype.deleteProduct = function(name) {
    const index = this.products.findIndex(product => product.name === name);
    if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`Product "${name}" deleted successfully.`);
    } else {
        console.log(`Product "${name}" not found.`);
    }
};

// Example usage
const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 999.99, 10);
const product2 = new Product('Chair', 'Furniture', 49.99, 50);

inventory.addProduct(product1); // Logs: Product "Laptop" added successfully.
inventory.addProduct(product2); // Logs: Product "Chair" added successfully.

console.log(inventory.products); // Displays the inventory array with two products

inventory.deleteProduct('Chair'); // Logs: Product "Chair" deleted successfully.
console.log(inventory.products); // Displays the inventory array with one product
