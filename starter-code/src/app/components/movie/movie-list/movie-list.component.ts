import { Movie } from './../../../shared/models/movie.model';
import { MoviesService } from './../../../shared/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(
    private router: Router,
    private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

  onClickPoster(id: number) {
    this.router.navigate(['/movies', id]);
  }
}
