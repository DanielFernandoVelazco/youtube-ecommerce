import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthsModule } from './auths/auths.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlDataSourceConfig } from './config/data-source';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SeedModule } from './seeds/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mysqlDataSourceConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('mysql'),
    }),
    UsersModule,
    ProductsModule,
    AuthsModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
