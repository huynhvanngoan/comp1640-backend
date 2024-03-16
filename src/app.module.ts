import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import { DepartmentManagerModule } from './faculity-manager/faculity-manager.module';
import { GuestService } from './guest/guest.service';
import { GuestController } from './guest/guest.controller';
import { GuestModule } from './guest/guest.module';
import { AdminModule } from './admin/admin.module';
import { MaketingCordinatorService } from './maketing-coordinator/maketing-cordinator.service';
import { MaketingCordinatorController } from './maketing-coordinator/maketing-cordinator.controller';
import { MaketingCordinatorModule } from './maketing-coordinator/maketing-cordinator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ArticleModule,
    AuthModule,
    StudentModule,
    CommentModule,
    DepartmentManagerModule,
    GuestModule,
    AdminModule,
    MaketingCordinatorModule,
  ],
  controllers: [
    AppController,
    CommentController,
    GuestController,
    MaketingCordinatorController,
  ],
  providers: [
    AppService,
    CommentService,
    GuestService,
    MaketingCordinatorService,
  ],
})
export class AppModule {}
