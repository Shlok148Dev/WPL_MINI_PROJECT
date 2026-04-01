/**
 * Advanced Form Validation and Security Guardrails
 */

// Basic XSS Prevention Guardrail (Sanitization)
function sanitizeInput(input) {
    // Replace < and > to prevent HTML injection
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

// Regex Validations
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}

function validateName(name) {
    return /^[A-Za-z\s]{2,50}$/.test(name);
}

function validatePassword(pass) {
    // At least 8 chars, 1 number, 1 special char
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(pass);
}

// Visual feedback for password strength (Advanced Feature)
function checkPasswordStrength(val) {
    const bar = document.getElementById('strength-bar');
    if(!bar) return;
    
    let strength = 0;
    if (val.length >= 8) strength += 25;
    if (val.match(/[A-Z]/)) strength += 25;
    if (val.match(/[0-9]/)) strength += 25;
    if (val.match(/[^a-zA-Z0-9]/)) strength += 25;
    
    bar.style.width = strength + '%';
    if (strength <= 25) bar.style.backgroundColor = '#d32f2f'; // Red
    else if (strength <= 50) bar.style.backgroundColor = '#f57c00'; // Orange
    else if (strength <= 75) bar.style.backgroundColor = '#fbc02d'; // Yellow
    else bar.style.backgroundColor = '#388e3c'; // Green
}

function showError(id, show) {
    const el = document.getElementById(id);
    if(el) el.style.display = show ? 'block' : 'none';
}

function submitRegisterForm(e) {
    e.preventDefault();
    let valid = true;
    
    // Sanitize and read inputs
    const name = sanitizeInput(document.getElementById('fullname').value);
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    if (!validateName(name)) { showError('fullname-error', true); valid = false; }
    else { showError('fullname-error', false); }
    
    if (!validateEmail(email)) { showError('reg-email-error', true); valid = false; }
    else { showError('reg-email-error', false); }
    
    if (!validatePhone(phone)) { showError('phone-error', true); valid = false; }
    else { showError('phone-error', false); }

    if (!validatePassword(password)) { showError('password-error', true); valid = false; }
    else { showError('password-error', false); }

    if(valid) {
        document.getElementById('register-success').style.display = 'block';
        document.getElementById('register-form').reset();
        document.getElementById('strength-bar').style.width = '0%';
        
        // Log clean sanitized data to conceptual backend
        console.log("Secure Payload:", { name, email, phone });
        
        setTimeout(() => {
            document.getElementById('register-success').style.display = 'none';
        }, 4000);
    }
    return false;
}

// Contact Form Handler
function submitContactForm(e) {
    e.preventDefault();
    let valid = true;
    
    const name = sanitizeInput(document.getElementById('name').value);
    const email = document.getElementById('email').value.trim();
    const message = sanitizeInput(document.getElementById('message').value);
    
    if (!validateName(name)) { showError('name-error', true); valid = false; }
    else { showError('name-error', false); }
    
    if (!validateEmail(email)) { showError('email-error', true); valid = false; }
    else { showError('email-error', false); }

    if (message.length < 10) { showError('message-error', true); valid = false; }
    else { showError('message-error', false); }
    
    if(valid) {
        let msg = document.getElementById('form-message');
        if(!msg) msg = document.getElementById('success-message');
        if(!msg) msg = document.createElement('div'); // fallback
        msg.style.display = 'block';
        msg.innerText = "Thank you for your inquiry. We will contact you soon.";
        msg.className = "text-center mt-4 text-primary font-label text-xs tracking-widest uppercase";
        document.getElementById('contact-form').reset();
        
        console.log("Secure Contact Payload:", { name, email, message });
        
        setTimeout(() => {
            msg.style.display = 'none';
        }, 4000);
    }
    return false;
}

// Feedback Form Handler
function submitFeedbackForm(e) {
    e.preventDefault();
    let valid = true;
    
    // Sanitize and read inputs
    const ratingElement = document.getElementById('rating');
    const feedbackText = sanitizeInput(document.getElementById('feedback-text').value);
    
    let rating = ratingElement ? ratingElement.value : '0';
    if (rating === '0') {
        valid = false;
        alert("Please select a rating.");
    }
    
    if (feedbackText.length < 5) {
        valid = false;
        alert("Please tell us more about your experience.");
    }

    if(valid) {
        const msg = document.getElementById('feedback-message');
        if(msg) {
            msg.style.display = 'block';
            msg.innerText = "Thank you for your valuable feedback!";
            msg.className = "text-center mt-6 text-primary font-label text-xs tracking-widest uppercase";
        }
        document.getElementById('feedback-form').reset();
        
        // reset stars
        document.querySelectorAll('.star').forEach(s => {
            s.classList.remove('diamond-filled');
            s.classList.add('text-outline-variant');
        });
        if(ratingElement) ratingElement.value = "0";
        
        console.log("Secure Feedback Payload:", { rating, feedbackText });
        
        setTimeout(() => {
            if(msg) msg.style.display = 'none';
        }, 4000);
    }
    return false;
}

// Attach listeners automatically
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', submitRegisterForm);
        const passInput = document.getElementById('password');
        if (passInput) {
            passInput.addEventListener('input', (e) => checkPasswordStrength(e.target.value));
        }
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }

    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', submitFeedbackForm);
        
        // Stars logic
        const stars = document.querySelectorAll('.star');
        const ratingInput = document.getElementById('rating');
        
        stars.forEach(star => {
            star.addEventListener('click', (e) => {
                const rating = e.target.getAttribute('data-rating');
                if(ratingInput) ratingInput.value = rating;
                
                stars.forEach(s => {
                    const sRating = s.getAttribute('data-rating');
                    if (parseInt(sRating) <= parseInt(rating)) {
                        s.classList.add('diamond-filled', 'text-primary');
                        s.classList.remove('text-outline-variant');
                        s.style.fontVariationSettings = "'FILL' 1, 'wght' 200";
                    } else {
                        s.classList.remove('diamond-filled', 'text-primary');
                        s.classList.add('text-outline-variant');
                        s.style.fontVariationSettings = "'FILL' 0, 'wght' 200";
                    }
                });
            });
        });
    }
});
