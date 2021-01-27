import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateMovieDto {

    @IsString()
    readonly title?: string;

    @IsNumber()
    readonly year?: number;

    @IsOptional()
    @IsString( { each : false } )
    readonly genres?: string[];

}