import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Article } from './articles/entities/article.entity';
import { User } from './user/entities/user.entity';
import { ArticlesModule } from './articles/articles.module';
import { AcademicYearModule } from './academic-year/academic-year.module';
import { Academicyear } from './academic-year/entities/academic-year.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE_NAME'),
        entities: [User, Article, Academicyear],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ArticlesModule,
    AcademicYearModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
