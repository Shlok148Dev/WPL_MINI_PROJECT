-- 1. CATEGORIES
CREATE TABLE categories (
    category_id   SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    description   TEXT
);

-- 2. PRODUCTS
CREATE TABLE products (
    product_id      SERIAL PRIMARY KEY,
    product_name    VARCHAR(100) NOT NULL,
    description     TEXT,
    price           DECIMAL(10,2) NOT NULL,
    category_id     INT REFERENCES categories(category_id),
    image_url       VARCHAR(200),
    stock_quantity  INT DEFAULT 0,
    created_date    DATE DEFAULT CURRENT_DATE
);

-- 3. CONTACT_SUBMISSIONS
CREATE TABLE contact_submissions (
    submission_id   SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    email           VARCHAR(100) NOT NULL,
    message         TEXT NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. USER_REGISTRATIONS
CREATE TABLE user_registrations (
    user_id           SERIAL PRIMARY KEY,
    full_name         VARCHAR(100) NOT NULL,
    email             VARCHAR(100) UNIQUE NOT NULL,
    phone             VARCHAR(15),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
