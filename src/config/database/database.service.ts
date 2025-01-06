import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(
    private configService: ConfigService,
    private dataSource: DataSource,
  ) {}

  async onApplicationBootstrap() {
    await this.checkDatabaseConnection();
  }

  private async checkDatabaseConnection() {
    try {
      if (this.dataSource.isInitialized) {
        this.logger.log('╔════════════════════════════════════════╗');
        this.logger.log('║        DATABASE BAĞLANTISI            ║');
        this.logger.log('╠════════════════════════════════════════╣');
        this.logger.log(`║ ✅ Durum: Bağlantı Başarılı           ║`);
        this.logger.log(`║ 📝 Database: ${this.dataSource.options.database}`);
        if ('host' in this.dataSource.options) {
          this.logger.log(
            `║ 🔌 Host: ${this.dataSource.options.host}:${this.dataSource.options.port}`,
          );
        }
        this.logger.log('╚════════════════════════════════════════╝');
      }
    } catch (error) {
      this.logger.error('╔════════════════════════════════════════╗');
      this.logger.error('║        DATABASE BAĞLANTISI            ║');
      this.logger.error('╠════════════════════════════════════════╣');
      this.logger.error(`║ ❌ Durum: Bağlantı Başarısız          ║`);
      this.logger.error(`║ ⚠️  Hata: ${error.message}`);
      this.logger.error('╚════════════════════════════════════════╝');
    }
  }
}
