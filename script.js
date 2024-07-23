// scripts.js
const productsDropdown = document.getElementById('products-dropdown');
const productsDropdownContent = document.getElementById('products-dropdown-content');
const homeContent = document.getElementById('home-content');

function toggleProductsDropdown(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    if (productsDropdownContent.style.display === 'block') {
        productsDropdownContent.style.display = 'none';
    } else {
        productsDropdownContent.style.display = 'block';
        // Display product list in the home content
        homeContent.appendChild(productsDropdownContent);
    }
}

// Show the dropdown when clicking on the "Products" link
productsDropdown.addEventListener('click', toggleProductsDropdown);

// Hide the dropdown when clicking outside of dropdown area
document.addEventListener('click', (event) => {
    if (!productsDropdown.contains(event.target)) {
        productsDropdownContent.style.display = 'none';
    }
});

const aboutDropdown = document.getElementById('about-dropdown');
const aboutDropdownContent = document.getElementById('about-dropdown-content');

function toggleAboutDropdown(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    aboutDropdownContent.style.display = aboutDropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Show the dropdown when clicking on the "About Us" link
aboutDropdown.addEventListener('click', toggleAboutDropdown);

// Hide the dropdown when clicking outside of dropdown area
document.addEventListener('click', (event) => {
    if (!aboutDropdown.contains(event.target)) {
        aboutDropdownContent.style.display = 'none';
    }
});

const myAccountDropdown = document.getElementById('my-account-dropdown');
const myAccountDropdownContent = document.getElementById('my-account-dropdown-content');

function toggleMyAccountDropdown(event) {
    event.stopPropagation();
    if (event.target.parentElement === myAccountDropdown) {
        if (myAccountDropdownContent.style.display === 'block') {
            myAccountDropdownContent.style.display = 'none';
        } else {
            myAccountDropdownContent.style.display = 'block';
            homeContent.appendChild(myAccountDropdownContent);
        }
    } 
}

// Show the dropdown when clicking on the "My Account" link
myAccountDropdown.addEventListener('click', toggleMyAccountDropdown);

// Hide the dropdown when clicking outside of dropdown area
document.addEventListener('click', (event) => {
    if (!myAccountDropdown.contains(event.target)) {
        myAccountDropdownContent.style.display = 'none';
    }
});

// Get the shopping cart link and content elements
const shoppingCartLink = document.getElementById('shopping-cart-link');
const shoppingCartContent = document.getElementById('shopping-cart-content');

// Function to toggle the shopping cart dropdown
function toggleShoppingCart(event) {
    event.stopPropagation();
    shoppingCartContent.style.display = shoppingCartContent.style.display === 'block' ? 'none' : 'block';
}

// Show the shopping cart dropdown when clicking on the "Shopping Cart" link
shoppingCartLink.addEventListener('click', toggleShoppingCart);

// Hide the shopping cart dropdown when clicking outside of dropdown area
document.addEventListener('click', (event) => {
    if (!shoppingCartLink.contains(event.target)) {
        shoppingCartContent.style.display = 'none';
    }
});

// scripts.js
const decreaseQuantityBtn = document.querySelector('.decrease-quantity');
const increaseQuantityBtn = document.querySelector('.increase-quantity');
const quantityInput = document.getElementById('quantity');

decreaseQuantityBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseQuantityBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});
