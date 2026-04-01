/**
 * Advanced Search Logic
 */
let selectedCategory = 'all';

function displayResults(results) {
    const grid = document.getElementById('search-results');
    if (!grid) return;

    if (results.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1 / -1; text-align: center; font-size: 1.2rem; color: var(--text-light);'>No beautifully crafted pieces found matching your criteria.</p>";
        return;
    }

    grid.innerHTML = results.map(p => `
        <div class='product-card'>
            <img src='${p.image}' alt='${p.name}' onerror="this.src='https://via.placeholder.com/300x300?text=Product+Image'">
            <div class='card-content'>
                <h3>${p.name}</h3>
                <p class='price'>Rs. ${p.price.toLocaleString()}</p>
                <div class='card-actions'>
                    <a href='product.html?id=${p.id}' class='btn-small'>View</a>
                    <button onclick='addToCart(${p.id})' class='btn-small' style='background: var(--primary); color: var(--secondary)'>Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

function performSearch() {
    // Sanitize search to prevent DOM-based XSS
    const rawTerm = document.getElementById('search-input').value.toLowerCase();
    const term = rawTerm.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    if(!window.productsData) return;

    const results = window.productsData.filter(p =>
        (p.name.toLowerCase().includes(term) ||
         p.description.toLowerCase().includes(term)) &&
        (selectedCategory === 'all' || p.category === selectedCategory)
    );
    displayResults(results);
}

document.addEventListener('DOMContentLoaded', () => {
    // Show all initially
    if(window.productsData) displayResults(window.productsData);

    const searchInput = document.getElementById('search-input');
    if(searchInput) {
        searchInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') performSearch();
        });
        // Real-time search
        searchInput.addEventListener('input', performSearch);
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
            performSearch();
        });
    });
});
