import { forwardRef, Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { UserModule } from '../user/user.module';
import { NewsModule } from '../news/news.module';
import { SocketCommentGateway } from './socket-comment.gateway';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [CommentController],
  providers: [CommentService, SocketCommentGateway],
  imports: [
    UserModule,
    forwardRef(() => NewsModule),
    TypeOrmModule.forFeature([Comment]),
    AuthModule],
  exports: [CommentService]
})
export class CommentModule { }
