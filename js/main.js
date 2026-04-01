/**
 * Main JavaScript File for Janka Creations - Advanced Version
 * Includes featured products fetching, cart counters, dark mode toggle, and mobile menu.
 */

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('janka_cart')) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    const countEls = document.querySelectorAll('.cart-count');
    countEls.forEach(el => el.textContent = count);
}

function addToCart(productId) {
    if(!window.productsData) return;
    const product = window.productsData.find(p => p.id === parseInt(productId));
    if(!product) return;
    
    let cart = JSON.parse(localStorage.getItem('janka_cart')) || [];
    let existingItem = cart.find(i => i.id === product.id);
    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    localStorage.setItem('janka_cart', JSON.stringify(cart));
    updateCartCount();
    
    // Quick notification
    const numItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    alert(`Added ${product.name} to your cart. You now have ${numItems} items.`);
}

function displayFeaturedProducts() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    if (typeof window.productsData === 'undefined' || !Array.isArray(window.productsData)) {
        grid.innerHTML = "<p>Error loading featured products...</p>";
        return;
    }
    const featuredList = window.productsData.slice(0, 4);
    if (featuredList.length === 0) {
        grid.innerHTML = "<p>No products available right now.</p>";
        return;
    }
    grid.innerHTML = featuredList.map(p => `
        <div class='product-card'>
            <img src='${p.image}' alt='${p.name}' onerror="this.src='https://via.placeholder.com/300x300?text=Product+Image'">
            <div class='card-content'>
                <h3>${p.name}</h3>
                <p class='price'>$${p.price.toLocaleString()}</p>
                <div class='card-actions'>
                    <a href='product.html?id=${p.id}' class='btn-small'>View Details</a>
                    <button onclick='addToCart(${p.id})' class='btn-small' style='background: var(--primary); color: var(--secondary)'>Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function displayCatalogue() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    if (typeof window.productsData === 'undefined' || !Array.isArray(window.productsData)) {
        grid.innerHTML = "<div class='col-span-full text-center py-20 text-on-surface-variant font-serif italic'>Catalogue loading...</div>";
        return;
    }
    grid.innerHTML = window.productsData.map(p => `
        <div class="group cursor-pointer">
            <div class="relative aspect-[4/5] overflow-hidden mb-6 bg-surface-variant/30">
                ${p.stock < 5 ? '<span class="absolute top-4 left-4 z-10 bg-white dark:bg-[#121111] px-2 py-1 text-[9px] tracking-[0.2em] uppercase font-bold text-error">Low Stock</span>' : ''}
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600'">
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-start">
                    <h3 class="noto-serif text-lg text-on-surface group-hover:text-primary transition-colors">${p.name}</h3>
                    <p class="manrope text-sm font-semibold tracking-wide text-primary whitespace-nowrap">$${p.price.toLocaleString()}</p>
                </div>
                <p class="manrope text-[10px] uppercase tracking-widest text-[#a09e9d] opacity-70">${p.category}</p>
                <button onclick="addToCart(${p.id})" class="mt-4 w-full py-3 border border-outline-variant text-[10px] uppercase tracking-widest hover:bg-[#775a19] hover:text-white transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Advanced Guardrail: Theme Persistence
function setupThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    if(!themeBtn) return;
    
    // Check saved theme
    if(localStorage.getItem('janka_theme') === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('janka_theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    displayCatalogue();
    setupMobileMenu();
    updateCartCount();
    setupThemeToggle();
});
