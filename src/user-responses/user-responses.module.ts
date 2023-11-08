import { Module } from '@nestjs/common';
import { UserResponsesController } from './user-responses.controller';
import { UserResponsesService } from './user-responses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResponseSchema } from './schemas/user-responses.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserResponse', schema: UserResponseSchema },
    ]),
  ],
  controllers: [UserResponsesController],
  providers: [UserResponsesService],
})
export class UserResponsesModule {}
