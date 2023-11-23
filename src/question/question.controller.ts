import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import CreateQuestionDto from './dto/create-question.dto';
import { Question } from './schemas/question.schema';
import UpdateQuestionDto from './dto/update-question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Get()
  findAll(@Query('theme') theme: string) {
    if (!theme) return this.questionService.findAll();
    return this.questionService.search(theme);
  }

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
    return this.questionService.create(createQuestionDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): Promise<Question> {
    return this.questionService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.questionService.delete(id);
  }
}
