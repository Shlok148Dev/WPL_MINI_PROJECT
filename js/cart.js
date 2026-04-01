function loadCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartSubTotalEl = document.getElementById('cart-main-subtotal');
    let cart = JSON.parse(localStorage.getItem('janka_cart')) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p class='text-center text-xl text-on-surface-variant opacity-60 py-12 serif italic'>Your cart is empty. <a href='catalogue.html' class='text-primary not-italic hover:underline'>Continue shopping</a></p>";
        if(cartTotalEl) cartTotalEl.innerHTML = "$0";
        if(cartSubTotalEl) cartSubTotalEl.innerHTML = "$0";
        return;
    }
    
    let total = 0;
    cartContainer.innerHTML = cart.map((item, index) => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class='flex gap-6 items-center border-b border-surface-variant/30 pb-6 mb-6 fade-in'>
                <img src='${item.image}' alt='${item.name}' class='w-24 h-24 object-cover' onerror="this.src='https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=200'">
                <div class='flex-1'>
                    <h3 class='font-serif text-lg mb-1'>${item.name}</h3>
                    <p class='text-primary font-semibold text-sm mb-3'>$${item.price.toLocaleString()}</p>
                    <div class='flex items-center gap-4'>
                        <button onclick='updateQuantity(${index}, -1)' class='w-8 h-8 rounded-full border border-surface-variant flex items-center justify-center hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors'>-</button>
                        <span class='font-label text-sm'>${item.quantity}</span>
                        <button onclick='updateQuantity(${index}, 1)' class='w-8 h-8 rounded-full border border-surface-variant flex items-center justify-center hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors'>+</button>
                    </div>
                </div>
                <div class='text-right flex flex-col items-end gap-2'>
                    <span class='font-semibold'>$${itemTotal.toLocaleString()}</span>
                    <button onclick='removeItem(${index})' class='text-on-surface-variant hover:text-error transition-colors mt-2 text-xs uppercase tracking-widest font-bold'>Remove</button>
                </div>
            </div>
        `;
    }).join('');
    
    if(cartTotalEl) cartTotalEl.innerHTML = "$" + total.toLocaleString();
    if(cartSubTotalEl) cartSubTotalEl.innerHTML = "$" + total.toLocaleString();
    updateCartCount(); // from main.js
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('janka_cart')) || [];
    if(cart[index]) {
        cart[index].quantity += change;
        if(cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('janka_cart', JSON.stringify(cart));
        loadCart();
    }
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('janka_cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('janka_cart', JSON.stringify(cart));
    loadCart();
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem('janka_cart')) || [];
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to secure checkout gateway... (Simulated)");
    localStorage.removeItem('janka_cart');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', loadCart);
