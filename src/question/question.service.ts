import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import CreateQuestionDto from './dto/create-question.dto';
import UpdateQuestionDto from './dto/update-question.dto';
import { Question, QuestionDocument } from './schemas/question.schema';
import { Model } from 'mongoose';

@Injectable()
export class QuestionService {
  async search(theme: string) {
    return this.questionModel.find({ theme }).exec();
  }

  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const createdQuestion = new this.questionModel({
      ...createQuestionDto,
    });
    return createdQuestion.save();
  }

  async update(
    id: string,
    updateQuestiontDto: UpdateQuestionDto,
  ): Promise</*UpdateResult*/ any> {
    return this.questionModel.updateOne({ _id: id }, updateQuestiontDto);
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.questionModel.deleteOne({ _id: id });
  }
}
