window.addEventListener("load", () => {
    fetch("http://localhost:8081/getProducts")
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Network error!');
            }
            return resp.json();
        })
        .then(data => {
            localStorage.setItem("products", JSON.stringify(data));

            if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", "[]")
            }

            data.forEach(product => {
                const prodGridWrapper = document.querySelector(".products-grid-wrapper");

                let innerHTML = `
                    <div class="product-item-wrapper" id="${product.id}">
                        <div class="item-image" style="background-image: url('${product.image}');"></div>
                        <div class="item-info">
                            <a class="item-header">${product.title}</a>
                            <a class="item-short-description">${product.description}</a>
                            <a class="item-price">$${product.price}</a>
                            <button class="add-to-cart-btn"><a class="add-to-cart-text">Add to cart</a></button>
                        </div>
                    </div>
                `;

                let element = document.createElement('div');
                element.innerHTML = innerHTML;
                prodGridWrapper.appendChild(element);

                // Add Event Listener after plate with product creates.
                const addToCartBtn = element.querySelector('.add-to-cart-btn');
                addToCartBtn.addEventListener('click', (event) => {
                    const productId = parseInt(event.target.closest('.product-item-wrapper').id);
                    addItemToCart(productId);
                });
            });
        });
});

function addItemToCart(productId){
    let products = JSON.parse(localStorage.getItem("products"));
    let cart = JSON.parse(localStorage.getItem("cart"));
    let product = products.find(product => product.id === productId );

    if(cart.length === 0){
        product.quantity = 1;
        cart.push(product);
    }
    else{
        let res = cart.find(element => element.id === productId);
        if(res === undefined){
            product.quantity = 1;
            cart.push(product);
        }
    }

    localStorage.setItem("cart",JSON.stringify(cart));
}

document.querySelector('#burger-img').addEventListener('click', function() {
    const menu = document.querySelector('.header-navigation');
    if(menu.style.display === 'flex'){
        menu.style.display = 'none';
    }
    else{
        menu.style.display = 'flex';
    }
});

document.querySelector('#cross-icon').addEventListener('click', function(){
    document.querySelector('#shopping-cart-bg').style.display = 'none';
});

function hideOrDisplayEmptyCartMessage()
{
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Hide the shopping cart empty message if the cart is not empty
    let emptyMessage = document.querySelector('#shopping-cart-empty-message');
    if (cart.length > 0) {
        emptyMessage.style.display = 'none';
    } else {
        emptyMessage.style.display = 'block';
    }
}

function removeAllItemsFromDisplayShoppingCart() {
    const parentElement = document.querySelector("#items-wrapper");

    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function displayItems() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.forEach(item => {
        let shoppingCartWrapper = document.querySelector("#items-wrapper");
        let innerHTML = `
            <div class="shopping-cart-item">
                <div class="left-buttons-wrapper">
                    <img class="shopping-cart-item-img" src="${item.image}">
                    <div class="shopping-cart-item-name-wrapper">
                        <div class="shopping-cart-item-name">${item.title}</div>
                        <div class="shopping-cart-item-description">${item.description}</div>
                        <div class="shopping-cart-item-description-id" >Id:${item.id}</div>
                    </div>
                </div>
                <div class="right-buttons-wrapper">
                    <div class="shopping-cart-item-quantity-wrapper">
                        <div class="shopping-cart-minus-item">-</div>
                        <div class="shopping-cart-quantity">${item.quantity}</div>
                        <div class="shopping-cart-plus-item">+</div>
                    </div>
                    <div class="shopping-cart-item-price">$${item.price}</div>
                    <img class="shopping-cart-item-remove-icon" src="images/remove_bin_icon.png">
                </div>
            </div>
        `;

        let element = document.createElement('div');
        element.innerHTML = innerHTML;
        shoppingCartWrapper.appendChild(element);
    });
}

function calculateAndDisplayTotal(){
    let cart = JSON.parse(localStorage.getItem("cart"));


    // Calculate and display total price if cart is not empty
    let totalPriceElement = document.querySelector('#shopping-cart-total');
    if (cart.length > 0) {
        let totalPrice = cart.reduce((total, item) => total + (parseInt(item.price) * parseInt(item.quantity)), 0);
        totalPriceElement.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
        totalPriceElement.style.display = 'block'; // Show the total price element
    } else {
        totalPriceElement.style.display = 'none'; // Hide the total price element if cart is empty
    }
}

function addEventListenersToRemoveButtons(){
    // Add event listener on Remove Button(icon)
    let removeIcons = document.querySelectorAll('.shopping-cart-item-remove-icon');
    removeIcons.forEach(removeIcon => {
        removeIcon.addEventListener('click', () => {
            // Get the product ID of the item to be removed
            let productId = parseInt(removeIcon.parentElement.parentElement.querySelector('.shopping-cart-item-description-id').textContent.split(':')[1].trim());
            // Call removeItemFromCart function
            removeItemFromCart(productId);
            updateShoppingCart();
        });
    });
}

function addEventListenersToPlusQuantityButtons() {
    // Add event listener on Plus Quantity Button
    let plusButtons = document.querySelectorAll('.shopping-cart-plus-item');
    plusButtons.forEach(plusButton => {
        plusButton.addEventListener('click', () => {
            let descriptionIdElement = plusButton.closest('.shopping-cart-item').querySelector('.shopping-cart-item-description-id');
            if (descriptionIdElement !== null) {
                let productId = parseInt(descriptionIdElement.textContent.split(':')[1].trim());
                incrementQuantity(productId);
            }
        });
    });
}

function addEventListenersToMinusItemButtons() {
    // Add event listener on Minus Item Button
    let minusButtons = document.querySelectorAll('.shopping-cart-minus-item');
    minusButtons.forEach(minusButton => {
        minusButton.addEventListener('click', () => {
            let descriptionIdElement = minusButton.closest('.shopping-cart-item').querySelector('.shopping-cart-item-description-id');
            if (descriptionIdElement !== null) {
                let productId = parseInt(descriptionIdElement.textContent.split(':')[1].trim());
                decrementQuantity(productId);
            }
        });
    });
}

function updateShoppingCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));

    hideOrDisplayEmptyCartMessage();

    removeAllItemsFromDisplayShoppingCart();

    displayItems();

    calculateAndDisplayTotal();

    addEventListenersToRemoveButtons();

    addEventListenersToPlusQuantityButtons();

    addEventListenersToMinusItemButtons();
}

function showShoppingCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    const shoppingCartPopUp = document.querySelector('#shopping-cart-bg');
    shoppingCartPopUp.style.display = 'flex';
}

document.querySelector('#shopping-cart-icon').addEventListener('click', function() {
    showShoppingCart();
    updateShoppingCart();
});

function removeItemFromCart(productId)
{
    let cart = JSON.parse(localStorage.getItem("cart"));
    let temp = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(temp));
}

// Function to increment quantity
function incrementQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Find the item in the cart with the matching productId
    let item = cart.find(item => item.id === productId);

    // If the item is found in the cart
    if (item) {
        // Increment the quantity of the item
        item.quantity++;

        // Update the cart in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update the shopping cart display
        updateShoppingCart();
    }
}

// Function to decrement quantity
function decrementQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Find the item in the cart with the matching productId
    let item = cart.find(item => item.id === productId);

    // If the item is found in the cart and quantity is greater than 1
    if (item && item.quantity > 1) {
        // Decrement the quantity of the item
        item.quantity--;

        // Update the cart in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update the shopping cart display
        updateShoppingCart();
    }
}