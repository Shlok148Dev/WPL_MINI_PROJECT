# Janka Creations — Luxury Jewellery E-Commerce Website

A responsive e-commerce web application built for **Janka Creations**, a luxury jewelry brand transitioning from offline retail to a digital storefront.

> **WPL Mini Project** — Web Programming Lab

---

## Problem Statement

Janka Creations, a successful offline jewelry brand led by a local female entrepreneur, faces a growth ceiling due to its lack of digital presence. The business is restricted by geographic boundaries and cannot reach modern consumers who prioritize online shopping. This project bridges that gap by building a fully functional e-commerce website.

---

## Features

- **Product Catalogue** — 20 jewelry items across 4 categories (Rings, Necklaces, Earrings, Bracelets)
- **Real-Time Search** — Live keyword filtering with category-based narrowing
- **Shopping Cart** — Add/remove items, quantity controls, persistent cart via localStorage
- **User Registration** — Form with regex validation and a live password strength meter
- **Contact & Feedback Forms** — Validated inputs with XSS sanitization
- **Star Rating System** — Interactive 5-star feedback widget
- **Dark / Light Mode** — Theme toggle with preference saved across sessions
- **Responsive Design** — Mobile-first layout using TailwindCSS + custom CSS
- **Database Schema** — PostgreSQL-ready relational schema (4 tables)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5 |
| Styling | TailwindCSS (CDN) + Custom CSS |
| Logic | Vanilla JavaScript (ES6) |
| Fonts | Google Fonts (Noto Serif, Manrope) |
| Icons | Material Symbols Outlined |
| Storage | Browser localStorage |
| Database | PostgreSQL (schema designed, backend integration planned) |

---

## Project Structure

```
WPL_MINI_PROJECT_REPO/
├── index.html              # Home page (hero, categories, featured products)
├── catalogue.html          # Full product catalogue grid
├── search.html             # Search & category filter page
├── product.html            # Individual product detail view
├── cart.html               # Shopping cart with checkout
├── contact.html            # Contact inquiry form
├── feedback.html           # Feedback form with star ratings
├── REGISTER.html           # User registration with password strength meter
│
├── css/
│   ├── style.css           # Core custom styles
│   └── responsive.css      # Media queries for mobile/tablet
│
├── js/
│   ├── products.js         # Product data array (20 items)
│   ├── main.js             # Core logic — catalogue render, theme toggle, cart counter
│   ├── cart.js             # Cart load, update, remove, checkout functions
│   ├── search.js           # Real-time search and category filter engine
│   └── form-validation.js  # Input validation, XSS sanitization, password strength
│
├── database/
│   ├── schema.sql          # Table creation (categories, products, contacts, users)
│   ├── data.sql            # Sample data inserts
│   └── queries.txt         # Common SQL queries (joins, filters, aggregates)
│
├── images/                 # Product images (20 PNGs — rings, necklaces, earrings, bracelets)
│
└── docs/
    ├── system_architecture.html  # Printable architecture diagram
    └── system_architecture.png   # Visual architecture image
```

---

## Database Schema

Four relational tables designed for PostgreSQL:

- **categories** — `category_id` (PK), `category_name`, `description`
- **products** — `product_id` (PK), `product_name`, `price`, `category_id` (FK → categories), `image_url`, `stock_quantity`
- **contact_submissions** — `submission_id` (PK), `name`, `email`, `message`, `submission_date`
- **user_registrations** — `user_id` (PK), `full_name`, `email` (UNIQUE), `phone`, `registration_date`

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Shlok148Dev/WPL_MINI_PROJECT.git
   ```
2. Open `index.html` in any modern browser (Chrome / Firefox / Edge).
3. No build tools or server setup required — the site runs entirely on the client side.

---

## Screenshots

| Home Page | Catalogue | Cart |
|-----------|-----------|------|
| Hero + Categories + Featured Products | 20-item responsive grid | Persistent cart with qty controls |

---

## Team

| Name | Role |
|------|------|
| — | Frontend Development |
| — | UI/UX Design |
| — | Database Design |

---

## License

This project was developed as part of the Web Programming Lab coursework. For academic use only.
