import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({ required: true, type: String })
  question: string;

  @Prop({ required: true, type: String })
  options: string[];

  @Prop({ required: true, type: String })
  theme: string;

  @Prop({ required: true, type: Number })
  answer: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
