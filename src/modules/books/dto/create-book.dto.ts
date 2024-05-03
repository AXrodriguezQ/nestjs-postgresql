import { IsNumber, IsString } from "class-validator";

export class CreateBookDto {

    @IsString()
    title: string;
    
    @IsString()
    author: string;
    
    @IsNumber()
    pages: number;
    
    @IsNumber()
    price: number;
}
