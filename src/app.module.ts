import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

import { dataSourceOptions } from 'db/data-source';
import { SeedsService } from './utils/seed-data.service';
import { User } from './user/entities/user.entity';

import { ArticlesModule } from './articles/articles.module';
import { AcademicYearModule } from './academic-year/academic-year.module';

import { Article } from './articles/entities/article.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([User, Article]),
    ConfigModule.forRoot(),

    UserModule,
    ArticlesModule,
    AcademicYearModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    ArticlesModule,
    AcademicYearModule
  ],
  controllers: [AppController],
  providers: [AppService, SeedsService],
})
export class AppModule { }
