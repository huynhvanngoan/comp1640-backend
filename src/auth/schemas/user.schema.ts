import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../../enum/roles.enum';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  fullname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ default: 'avatar.sgv' })
  avatar: string;

  @Prop({ required: true, enum: Role, default: Role.ADMIN })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
