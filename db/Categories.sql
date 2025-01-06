
DROP TABLE IF EXISTS "Categories";

-- Kategoriler tablosu
CREATE TABLE "Categories" (
    "id" SERIAL PRIMARY KEY, -- Benzersiz kategori ID'si
    "name" VARCHAR(255) UNIQUE NOT NULL, -- Kategori adı
    "description" TEXT -- Kategori açıklaması
);
