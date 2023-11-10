import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './schemas/question.schema';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async createQuestion(
    @Body() questionData: Partial<Question>,
  ): Promise<Question> {
    return this.questionService.createQuestion(questionData);
  }

  @Get()
  async findAllQuestions(): Promise<Question[]> {
    return this.questionService.findAllQuestions();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
}
