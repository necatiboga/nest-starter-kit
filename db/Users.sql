DROP TABLE IF EXISTS "Users" CASCADE;

-- Önce enum tipini oluştur
DROP TYPE IF EXISTS "user_role_enum";
CREATE TYPE "user_role_enum" AS ENUM ('user', 'admin');

-- Kullanıcılar tablosu
CREATE TABLE "Users" (
    "id" SERIAL PRIMARY KEY,  -- Benzersiz kullanıcı ID'si
    "username" VARCHAR(100),  -- Kullanıcı adı (nullable)
    "password" VARCHAR(255) NOT NULL,  -- Şifre (şifreler hashlenmeli)
    "email" VARCHAR(255) UNIQUE NOT NULL,  -- Kullanıcı e-posta adresi
    "role" user_role_enum NOT NULL DEFAULT 'user',  -- Kullanıcı rolü
    "refreshToken" VARCHAR(500),  -- Refresh token (nullable)
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Kayıt tarihi
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Son güncellenme tarihi
);

-- İlk admin kullanıcısını oluştur (isteğe bağlı)
-- INSERT INTO "Users" (username, password, email, role) 
-- VALUES ('admin', 'hashedpassword', 'admin@example.com', 'admin');