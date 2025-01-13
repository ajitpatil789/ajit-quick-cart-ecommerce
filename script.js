const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

////////////////////////////
// Add to cart functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const productId = this.getAttribute("data-product-id");
    const productName = this.getAttribute("data-product-name");
    const productPrice = this.getAttribute("data-product-price");
    const productImage = this.getAttribute("data-product-image");

    // Get the existing cart from localStorage, or initialize an empty cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
      // If the product is already in the cart, increase the quantity
      existingProduct.quantity += 1;
    } else {
      // Otherwise, add the product to the cart
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
        image: productImage,
      });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
  });
});
