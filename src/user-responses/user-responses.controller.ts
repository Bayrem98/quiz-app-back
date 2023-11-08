import { Body, Controller, Post } from '@nestjs/common';
import { UserResponsesService } from './user-responses.service';

@Controller('user-responses')
export class UserResponsesController {
  constructor(private readonly userResponseService: UserResponsesService) {}

  @Post()
  async saveUserResponses(@Body() userResponses: number[]) {
    return this.userResponseService.saveUserResponses(userResponses);
  }
}
