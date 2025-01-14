<%--
  Created by IntelliJ IDEA.
  User: illya
  Date: 25.05.2024
  Time: 20:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" type="text/css" href="styles/style.css">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">


</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="styles/style.css" >


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">


</head>
<body>
<div class = "main-flex-container">
    <header class = "header">

        <div class = header-burger-wrapper>
            <img id = "main-logo" src="images/header_logo.svg">

            <div id ="burger-img"><img src ="images/burger-menu.svg" ></div>

        </div>

        <nav class = "header-navigation">
            <a class = "navigation-item" header-navigation__ = "" href = "index.html">Home</a></li>
            <a class = "navigation-item" href = "#">Shop</a></li>
            <a class = "navigation-item" href = "#" >About</a></li>
        </nav>

        <div class = "header-icons">
            <img class = "header-icon-item" src="images/header_report_man_icon.svg">
            <img class = "header-icon-item" src="images/header_search_icon.svg">
            <img class = "header-icon-item" src="images/header_heart_icon.svg">
            <img class = "header-icon-item" id="shopping-cart-icon" src="images/header_shopping_cart_icon.svg">

        </div>

    </header>




    <section class = "greeting-offer">
        <div class="greeting-offer-flex-container">

            <a id = "new-arrival-text">New arrival<br></a>
            <a id = "discover-our-new-collection">Discover Our</a>
            <a id = "discover-our-new-collection">New collection</a>
            <a id ="third-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.<br></a>
            <button id ="greeting-offer-buy-button"><a>BUY NOW</a></button>
        </div>
    </section>

    <section class="browse-the-rage">
        <div class = "browse-the-rage-header">
            <a id = "header-text">Browse The Range</a>
            <a id = "subheader-text">Choose unique interior for your house.</a>
        </div>
        <div class="room-card-container">
            <div class="room-card-wrapper">
                <div class="room-card" id ="dining">

                </div>
                <a>Dining</a>
            </div>
            <div class="room-card-wrapper">
                <div class="room-card" id = "living">

                </div>
                <a>Living</a>
            </div>
            <div class="room-card-wrapper">
                <div class="room-card" id = bedroom>

                </div>
                <a>Bedroom</a>
            </div>

        </div>

    </section>

    <section class="our-products">
        <div class="our-products-wrapper">

            <a id = "our-products-header">Our Products</a>

            <div class="products-grid-wrapper" >

            </div>

            <button class="show-more-btn">Show more</button>

        </div>

    </section>

    <footer>
        <div class="footer-top-wrapper">
            <div class="first-column">
                <a id = "company-name">Furniro.</a>
                <a id ="address"> 400 University Drive Suite 200 Coral Gables,<br>
                    FL 33134 USA</a>
            </div>
            <div class = "links">
                <a id="links-column">Links</a>
                <a class = "column-item">Home</a>
                <a id="column-item">Shop</a>
                <a id="column-item">About</a>
                <a id="column-item">Contact</a>
            </div>

            <div class = "help">
                <a id="links-column">Help</a>
                <a class = "column-item">Payment Options</a>
                <a id="column-item">Returns</a>
                <a id="column-item">Privacy Policies</a>
            </div>

            <div class = "links">
                <a id="links-column">Newsletter</a>
                <form class="email-subscription-form-wrapper">
                    <input class = "email-address-input" name = "Email" placeholder="Enter your email address" >
                    <button class="subscribe-btn">Subscribe</button>
                </form>
            </div>
        </div>
    </footer>

    <div id = "shopping-cart-bg">
        <div id = "shopping-cart-wrapper">
            <div id = "shopping-cart-inner-wrapper">
                <img id ="cross-icon" src = "images/cross_icon.png">
                <h1 id="shopping-cart-header">Shopping cart</h1>
                <div id = "shopping-cart-empty-message">Your shopping cart is empty yet.</div>

                <div id = "items-wrapper">
                </div>
                <div id = "shopping-cart-total">

                </div>
            </div>
        </div>
    </div>
    <script src="./js/script.js"></script>
</div>
</body>
</html>
</body>
</html>
