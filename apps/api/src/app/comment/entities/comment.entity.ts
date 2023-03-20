import { News } from '../../news/entities/news.entity';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  message: string;

  @ManyToOne(() => User, user => user.comments)
  author: User;

  @ManyToOne(() => News, news => news.comments)
  news: News;
}
