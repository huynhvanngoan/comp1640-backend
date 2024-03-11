import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';
// Import User schema

@Schema({ timestamps: true })
export class Article extends Document {
    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    image?: string;

    @Prop()
    file?: string;

    @Prop()
    status?: string;

    @Prop()
    date?: Date;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' }) // Reference to User model by ID
    author: MongooseSchema.Types.ObjectId;
    // @Prop({ type: UserSchema }) // Reference to User schema
    // author: User; // This field will hold the user who created the article
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
