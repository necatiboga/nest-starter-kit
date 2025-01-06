DROP TABLE IF EXISTS "Carts";

-- Sepetler tablosu
CREATE TABLE "Carts" (
    "id" SERIAL PRIMARY KEY, -- Benzersiz sepet ID'si
    "user_id" INT REFERENCES "Users"("id"), -- Kullanıcı ID'si
    "product_id" INT REFERENCES "Products"("id"), -- Ürün ID'si
    "quantity" INT NOT NULL, -- Ürün adeti
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Sepet oluşturma tarihi
);