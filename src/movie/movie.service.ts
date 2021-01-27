import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movies.entitiy';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {

    private movies: Movie[] = [];

    getAllMovies() : Movie[] {
        return this.movies;
    }

    getTargetMovie(id:string) : Movie {
        const movie = this.movies.find(movie => movie.id === id);

        if (!movie) {
            throw new NotFoundException();
        }

        return movie;
    }

    deleteTargetMovie(id:string){
        this.getTargetMovie(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    createMovie(movieData) {
        this.movies.push({
            id: this.movies.length + 1, 
            ...movieData
        })
    }

    updateMovie(id:string, updateData) {
        const movie =this.getTargetMovie(id);
        this.deleteTargetMovie(id);
        this.movies.push({...movie, ...updateData});
    }





}
