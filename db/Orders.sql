DROP TABLE IF EXISTS "Orders";

-- Siparişler tablosu
CREATE TABLE "Orders" (
    "id" SERIAL PRIMARY KEY, -- Benzersiz sipariş ID'si
    "user_id" INT REFERENCES "Users"("id"), -- Kullanıcı ID'si
    "product_id" INT REFERENCES "Products"("id"), -- Ürün ID'si
    "quantity" INT NOT NULL, -- Ürün adeti
    "total_amount" DECIMAL(10, 2) NOT NULL, -- Toplam fiyat
    "status" VARCHAR(255) NOT NULL, -- Sipariş durumu
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Sipariş tarihi
);