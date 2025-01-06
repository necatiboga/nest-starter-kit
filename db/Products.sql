DROP TABLE IF EXISTS "Products";

-- Ürünler tablosu
CREATE TABLE "Products" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL(10, 2) NOT NULL,
    "stock" INT NOT NULL,
    "description" TEXT,
    "category_id" INT REFERENCES "Categories"("id"),
    "category_name" VARCHAR(255) REFERENCES "Categories"("name"),
    "image" VARCHAR(255),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
