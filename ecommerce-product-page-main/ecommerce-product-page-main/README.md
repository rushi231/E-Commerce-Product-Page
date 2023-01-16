# Frontend Mentor - E-commerce product page

![Design preview for the E-commerce product page coding challenge](./design/desktop-preview.jpg)





## Objective

The objective was to build an e-commerce product page.


 In this project you will be able to :

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it



## Where to find everything

Everything is built out the project to the designs inside the `/design` folder. 

The designs are in JPG static format. 


You will find all the required assets in the `/images` folder. The assets are already optimized.



## MY process
-Build With
  - HTML
  - CSS
  - Flexbox
  - JavaScript

## What I learned
  - I learned a lot more about DOM manipulation. The goal of this project was to imporve my JS skills which mainly foucsed on DOM mainpulation. With the use of DOM manipulation I was able to code a working shopping cart in a efficent manner.
  
  ```
  function quantityChanged(event) {
    var input = event.target
    // input value not a number or less than 0. Set to 1 if condition is true
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    // get the shop item div
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    // show the product image in the cart
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

// make a new div and then make it appear to end of the cart each time
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    // the same product can not be added to seprate times to the cart
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Item is already added to the cart')
            return
        }
    }
  ```


## Continued Development
 - In the project I have to make the main page responsive which I will do in the future. I did make the other pages responsive just to ensure I do know how to make something responsive. Moreso I will implemnt a mobile version of the design also. 



- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)




