import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: Number,
});

export interface Question extends mongoose.Document {
  question: string;
  options: string[];
  answer: number;
}
