
// Product information
let productName = "Keyboard";
let price = 50;
let quantity = 3;
let discount = 10;

// Calculate total price
let totalPrice = price * quantity;

// Apply discount
let finalPrice = totalPrice - discount;

// Check shipping status
let shippingStatus;
if (finalPrice >= 100) {
    shippingStatus = "Free shipping";
} else {
    shippingStatus = "Shipping fee required";
}

// Display result
console.log("Product:", productName);
console.log("Price: $" + price);
console.log("Quantity:", quantity);
console.log("Total:", "$" + totalPrice);
console.log("Discount:", "$" + discount);
console.log("Final Price:", "$" + finalPrice);
console.log("Shipping:", shippingStatus);