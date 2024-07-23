// turmeric-script.js

// Function to decrease the quantity value
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity -= 1;
        quantityInput.value = quantity;
    }
}

// Function to increase the quantity value
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    if (quantity < 100) {
        quantity += 1;
        quantityInput.value = quantity;
    }
}

// Function to place an order
function placeOrder() {
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value);
    alert('You have placed an order for ' + quantity + ' units of Turmeric.');
}

// Function to send an inquiry
function sendInquiry() {
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value);
    const message = 'I am interested in purchasing ' + quantity + ' units of Turmeric. Please provide more information.';
    alert('Inquiry message: ' + message);
}

