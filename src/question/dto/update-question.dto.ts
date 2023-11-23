import {
  IsArray,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export default class UpdateQuestionDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  @IsString()
  question?: string;
  @IsOptional()
  @IsArray()
  options?: string[];
  @IsOptional()
  @IsString()
  theme?: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  answer?: number;
}
