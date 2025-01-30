import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDTO {
        @IsEmail()
        public email: string;

        @IsString()
        public password: string;

        @IsString()
        public name: string;

        @IsOptional()
        @IsNumber()
        public age?: number;
  }