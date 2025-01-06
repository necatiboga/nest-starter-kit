DROP TABLE IF EXISTS "Ratings";

-- Değerlendirmeler tablosu
CREATE TABLE "Ratings" (
    "id" SERIAL PRIMARY KEY, -- Benzersiz değerlendirme ID'si
    "user_id" INT REFERENCES "Users"("id"), -- Kullanıcı ID'si
    "product_id" INT REFERENCES "Products"("id"), -- Ürün ID'si
    "rating" INT NOT NULL, -- Değerlendirme puanı
    "comment" TEXT -- Değerlendirme açıklaması
);