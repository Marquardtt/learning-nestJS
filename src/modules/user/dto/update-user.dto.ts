import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';

export class updateUserDTO {
        @IsOptional()
        @IsEmail()
        public email?: string;

        @IsOptional()
        @IsString()
        public password?: string;
        
        @IsOptional()
        @IsString()
        public name?: string;

        @IsOptional()
        @IsNumber()
        public age?: number;
  }