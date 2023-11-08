import * as mongoose from 'mongoose';

export const UserResponseSchema = new mongoose.Schema({
  useranswer: Number,
});

export interface UserResponse extends mongoose.Document {
  useranswer: number;
}
