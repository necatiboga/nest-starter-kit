DROP TABLE IF EXISTS "Comments";

-- Yorumlar tablosu
CREATE TABLE "Comments" (
    "id" SERIAL PRIMARY KEY, -- Benzersiz yorum ID'si
    "user_id" INT REFERENCES "Users"("id"), -- Kullanıcı ID'si
    "product_id" INT REFERENCES "Products"("id"), -- Ürün ID'si
    "content" TEXT NOT NULL, -- Yorum içeriği
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Yorum tarihi
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Son güncellenme tarihi
);