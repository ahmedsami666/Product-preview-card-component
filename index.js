var clientWidth = document.documentElement.clientWidth;
var product = document.querySelector(".product");

if (clientWidth < 375 || clientWidth === 375){
    product.setAttribute("src", "images/image-product-mobile.jpg");
};