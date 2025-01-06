DROP TABLE IF EXISTS "OrderItems";

-- Sipariş öğeleri tablosu
CREATE TABLE "OrderItems" (
    "id" SERIAL PRIMARY KEY, -- Benzersiz sipariş öğesi ID'si
    "order_id" INT REFERENCES "Orders"("id"), -- Sipariş ID'si
    "product_id" INT REFERENCES "Products"("id"), -- Ürün ID'si
    "quantity" INT NOT NULL, -- Ürün adeti
    "price" DECIMAL(10, 2) NOT NULL -- Ürün fiyatı
);