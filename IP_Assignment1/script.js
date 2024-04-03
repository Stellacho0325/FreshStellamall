// Event listener for the search button
document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-box').value;
    // Implement your search logic here or redirect to a search results page
    console.log('Searching for:', searchTerm);
    // For demonstration purposes, let's just alert the term
    alert('Search for ' + searchTerm);
});

// Event listeners for account and cart buttons
document.getElementById('account-button').addEventListener('click', function() {
    // Handle account action here
    console.log('Account button clicked');
    // For demonstration purposes, let's just alert
    alert('Account button clicked');
});

document.getElementById('cart-button').addEventListener('click', function() {
    // Handle cart action here
    console.log('Cart button clicked');
    // For demonstration purposes, let's just alert
    alert('Cart button clicked');
});

// Handling category navigation
document.querySelectorAll('#category-nav ul li').forEach(function(item) {
    item.addEventListener('click', function() {
        var category = this.textContent.trim();
        // Implement your logic to display the products of this category
        console.log('Category selected:', category);
        // For demonstration purposes, let's just alert the category
        alert('Category selected: ' + category);
    });
});
