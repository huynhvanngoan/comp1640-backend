import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

import { dataSourceOptions } from 'db/data-source';
import { SeedsService } from './utils/seed-data.service';
import { User } from './user/entities/user.entity';
import { Article } from './articles/entities/article.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, Article]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, SeedsService],
})
export class AppModule {}
