import { Injectable } from '@nestjs/common';

@Injectable()
export class UserResponsesService {
  userResponseModel: any;
  async saveUserResponses(userResponses: number[]): Promise<void> {
    await this.userResponseModel.create({ responses: userResponses });
  }
}
