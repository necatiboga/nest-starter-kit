
DROP TABLE IF EXISTS "Inventory";

-- Stok tablosu
CREATE TABLE "Inventory" (
    "id" SERIAL PRIMARY KEY, -- Benzersiz stok ID'si
    "product_id" INT REFERENCES "Products"("id"), -- Ürün ID'si
    "quantity" INT NOT NULL -- Ürün adeti
);