import { MovieItemComponent } from './components/movie/movie-item/movie-item.component';
import { HomeComponent } from './components/misc/home/home.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'movies/:id', component: MovieItemComponent }
]