import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ArticleStatus } from 'src/enum/status.enum';

export enum Author {
  AUTHOR1 = 'author1',
  AUTHOR2 = 'author2',
  AUTHOR3 = 'author3',
  AUTHOR4 = 'author4',
  AUTHOR5 = 'author5',
}

@Schema({
  timestamps: true,
})
export class Article {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  image?: string;

  @Prop()
  file?: string;

  @Prop({ required: true, enum: ArticleStatus })
  status: 'Pending' | 'Accepted' | 'Declined';

  @Prop()
  date?: Date;

  @Prop()
  author: Author;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
