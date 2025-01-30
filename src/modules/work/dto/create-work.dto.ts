import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateWorkDTO {
    
    @IsString()
    public name: string;

    @IsNumber()
    @IsOptional()
    public salary?: number;
}