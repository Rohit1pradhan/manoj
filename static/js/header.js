// Example of dynamic cart count update (can be tied to Django context or AJAX)
document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.querySelector('.cart-count');
    
    // Simulate cart count (In a real scenario, you can fetch this data dynamically)
    let cartItems = 0; // This would come from Django or AJAX
    
    function updateCartCount() {
        cartCount.textContent = cartItems;
    }

    // For demonstration, increment cart items every 2 seconds
    setInterval(function () {
        cartItems++;
        updateCartCount();
    }, 2000);
});
