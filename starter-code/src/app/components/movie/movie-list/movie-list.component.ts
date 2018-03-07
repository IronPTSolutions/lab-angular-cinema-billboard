import { Movie } from './../../../shared/models/movie.model';
import { MoviesService } from './../../../shared/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

}
