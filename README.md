<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">NestJS Starter Kit</h1>

<p align="center">
  A comprehensive and production-ready NestJS backend solution for modern web applications
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
</p>

## 📋 Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## 📖 Description

This project is a NestJS-based starter kit that provides a solid foundation for modern web applications. Built with TypeScript, it includes essential features like authentication, authorization, database management, and API documentation.

## ✨ Features

### 🏗️ Core Features
- **NestJS Framework** - TypeScript-based, scalable backend architecture
- **PostgreSQL + TypeORM** - Powerful database integration and ORM support
- **Modular Structure** - Clean and maintainable code organization

### 🔐 Security
- **JWT Authentication** - Access & Refresh token system
- **Role-Based Authorization** - Admin/User role management
- **Password Hashing** - Secure password storage with Bcrypt
- **Guards & Decorators** - Endpoint-level security

### 📚 API & Documentation
- **Swagger UI** - Automatic API documentation and testing interface
- **OpenAPI 3.0** - Standard API specification
- **Interactive Testing** - Live API testing through Swagger interface

### 🛡️ Error Handling & Validation
- **Global Exception Handling** - Centralized error management
- **Response Transformation** - Standard API response format
- **Validation Pipes** - Input data validation
- **Class Validator** - DTO-level validation

### 🌐 Additional Features
- **CORS Support** - Cross-origin resource sharing
- **Environment Configuration** - Environment-based configuration
- **Logging** - Detailed logging system

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | NestJS, Express |
| **Language** | TypeScript |
| **Database** | PostgreSQL |
| **ORM** | TypeORM |
| **Authentication** | JWT, Passport |
| **Validation** | Class-validator, Class-transformer |
| **Documentation** | Swagger/OpenAPI |
| **Testing** | Jest, Supertest |
| **Code Quality** | ESLint, Prettier |

## 🚀 Installation

### Prerequisites
- Node.js (v22 or higher)
- PostgreSQL (v17 or higher) OR Docker
- npm or yarn

### PostgreSQL Setup with Docker

1. **Run PostgreSQL with Docker**
```bash
sudo docker run --name nest-starter-kit -e POSTGRES_USER=username -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

2. **Access Docker container**
```bash
docker exec -it nest-starter-kit bash
```

3. **Connect to PostgreSQL**
```bash
psql -U username
```

4. **Create database**
```sql
CREATE DATABASE nest_db;
```

### Project Setup

1. **Clone the repository**
```bash
git clone https://github.com/necatiboga/nest-starter-kit
cd nest-starter-kit
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit the .env file with your configuration
```

4. **Create database (if not using Docker)**
```bash
# Create database in PostgreSQL
createdb nest-db
```

## ▶️ Running the App

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

After running the application:
- **API Base URL:** `http://localhost:3000/api`
- **Swagger UI:** `http://localhost:3000/swagger`

## 🔧 Environment Variables

Set up the following variables in your `.env` file:

```bash
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=nest-db

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
JWT_REFRESH_SECRET=your_refresh_secret_key
JWT_REFRESH_EXPIRES_IN=30d
```

## 📚 API Documentation

Swagger UI interface is available at `http://localhost:3000/swagger`

### Main Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh-token` - Token refresh
- `POST /api/auth/logout` - Logout

#### Users
- `GET /api/users` - Get users list (Admin only)
- `GET /api/users/profile` - Get profile information
- `GET /api/users/:id` - Get user by id (Admin only)
- `POST /api/users` - Create new user (Admin only)
- `PATCH /api/update-profile` - Update own profile
- `PATCH /api/users/:id` - Update user by id (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

## 📁 Project Structure

```
src/
├── common/              # Shared components
│   ├── filters/         # Exception filters
│   ├── interceptors/    # Response interceptors
│   └── interfaces/      # Common interfaces
├── config/              # Configuration files
│   └── database/        # Database configuration
├── modules/             # Application modules
│   ├── auth/            # Authentication module
│   │   ├── decorators/  # Auth decorators
│   │   ├── dto/         # Data Transfer Objects
│   │   ├── guards/      # Auth guards
│   │   └── strategies/  # Passport strategies
│   └── users/           # Users module
│       ├── dto/         # User DTOs
│       └── entities/    # User entity
├── app.module.ts        # Main application module
└── main.ts              # Application entry point
```

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

Feel free to open an issue or submit a pull request for any questions or suggestions.

---

⭐ If you like this project, don't forget to give it a star!
