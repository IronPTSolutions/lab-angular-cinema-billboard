import { Movie } from './../models/movie.model';
import { movies } from './../data/movies.data';
import { Injectable } from '@angular/core';


@Injectable()
export class MoviesService {
  private movies: Array<Movie> = movies;

  getMovies(): Array<Movie> { 
    return this.movies;
  }

  getMovie(id: number): Movie {
    return this.movies.find(movie => movie.id === id)
  }
}
