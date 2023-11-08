import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private readonly questionModel: Model<Question>,
  ) {}

  async createQuestion(questionData: Partial<Question>): Promise<Question> {
    const createdQuestion = new this.questionModel(questionData);
    return createdQuestion.save();
  }

  async findAllQuestions(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }
}
