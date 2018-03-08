import { MoviesService } from './../../../shared/services/movies.service';
import { Movie } from './../../../shared/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  movie: Movie

  constructor(
    private routes: ActivatedRoute,
    private moviesService: MoviesService) {}

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => this.movie = this.moviesService.getMovie(Number(params['id'])));
  }

}
