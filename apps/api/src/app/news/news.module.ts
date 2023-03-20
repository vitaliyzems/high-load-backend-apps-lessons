import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { MailModule } from '../mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';
import { CommentModule } from '../comment/comment.module';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [MailModule, UserModule, CategoryModule, CommentModule, TypeOrmModule.forFeature([News])],
  exports: [NewsService]
})
export class NewsModule { }
