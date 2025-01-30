import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';
import { Work } from 'src/modules/work/entity/work.entity';

export class UpdateUserDTO {
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

        @IsOptional()
        public work?: Work;
  }