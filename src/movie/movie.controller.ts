import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './entities/movies.entitiy';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {

    constructor(private readonly movieService: MovieService) {}

    @Get()
    getAllMovies() : Movie[] {
        return this.movieService.getAllMovies();
    }

    @Get(":id")
    getTargetMovie(@Param("id") id:string ) : Movie {
        return this.movieService.getTargetMovie(id);
    }

    @Post()
    createMovie(@Body() createData: CreateMovieDto) {
        return this.movieService.createMovie(createData);
    }

    @Delete(":id")
    removeMovie(@Param("id") id:string) {
        return this.movieService.deleteTargetMovie(id);
    }




}
