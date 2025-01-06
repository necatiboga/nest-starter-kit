import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  // synchronize: process.env.NODE_ENV !== 'production',
  // dropSchema: process.env.NODE_ENV !== 'production',
  synchronize: true,
  dropSchema: true,
  logging: true,
}));
// export default registerAs('database', () => ({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'necati',
//   password: '123',
//   database: 'nest-db',
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   synchronize: process.env.NODE_ENV !== 'production',
// }));
