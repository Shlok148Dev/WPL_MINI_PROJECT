INSERT INTO categories (category_name, description) VALUES
  ('Necklaces',  'Elegant necklaces for every occasion'),
  ('Earrings',   'Beautiful earrings to complement your style'),
  ('Rings',      'Timeless rings that symbolize love'),
  ('Bracelets',  'Delicate bracelets for everyday wear');

-- 5 Necklaces (category_id = 1)
INSERT INTO products (product_name, description, price, category_id, image_url, stock_quantity) VALUES
  ('Diamond Solitaire Necklace', 'Classic diamond pendant on 18K gold chain', 45000, 1, 'images/necklace1.jpg', 5),
  ('Emerald Pendant Necklace', 'Natural emerald with gold setting', 52000, 1, 'images/necklace2.jpg', 7),
  ('Ruby Heart Necklace', 'Stunning ruby heart pendant in silver', 35000, 1, 'images/necklace3.jpg', 4),
  ('Sapphire Choker', 'Elegant sapphire choker with diamond accents', 65000, 1, 'images/necklace4.jpg', 2),
  ('Platinum Chain Necklace', 'Sleek and polished platinum chain for a modern look', 25000, 1, 'images/necklace5.jpg', 15);

-- 5 Earrings (category_id = 2)
INSERT INTO products (product_name, description, price, category_id, image_url, stock_quantity) VALUES
  ('Pearl Drop Earrings', 'Freshwater pearls with silver hooks', 8500, 2, 'images/earring1.jpg', 12),
  ('Diamond Stud Earrings', 'Brilliant cut diamond studs in white gold', 55000, 2, 'images/earring2.jpg', 8),
  ('Gold Hoop Earrings', 'Classic 22k gold hoop earrings', 18000, 2, 'images/earring3.jpg', 20),
  ('Rose Gold Chandelier Earrings', 'Intricate chandelier design in rose gold', 42000, 2, 'images/earring4.jpg', 5),
  ('Sapphire Dangle Earrings', 'Deep blue sapphire stones in elegant setting', 48000, 2, 'images/earring5.jpg', 6);

-- 5 Rings (category_id = 3)
INSERT INTO products (product_name, description, price, category_id, image_url, stock_quantity) VALUES
  ('Rose Gold Engagement Ring', '1 carat diamond on rose gold band', 75000, 3, 'images/ring1.jpg', 3),
  ('Platinum Wedding Band', 'Simple, elegant platinum band', 35000, 3, 'images/ring2.jpg', 10),
  ('Emerald Cut Diamond Ring', 'Stunning 2 carat emerald cut diamond', 120000, 3, 'images/ring3.jpg', 2),
  ('Vintage Ruby Ring', 'Antique design ruby ring with diamond halo', 65000, 3, 'images/ring4.jpg', 4),
  ('Silver Infinity Ring', 'Infinity symbol ring in sterling silver', 4500, 3, 'images/ring5.jpg', 25);

-- 5 Bracelets (category_id = 4)
INSERT INTO products (product_name, description, price, category_id, image_url, stock_quantity) VALUES
  ('Gold Charm Bracelet', '22K gold with traditional charms', 32000, 4, 'images/bracelet1.jpg', 8),
  ('Diamond Tennis Bracelet', 'Brilliant diamonds set in white gold row', 95000, 4, 'images/bracelet2.jpg', 3),
  ('Silver Bangle Set', 'Set of 4 polished sterling silver bangles', 12000, 4, 'images/bracelet3.jpg', 15),
  ('Rose Gold Cuff', 'Modern minimalist rose gold cuff bracelet', 28000, 4, 'images/bracelet4.jpg', 10),
  ('Pearl Beaded Bracelet', 'Cultured pearls strung on a delicate chain', 15000, 4, 'images/bracelet5.jpg', 12);
