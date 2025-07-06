import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { NaveComponent } from './components/nave/nave.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inicio',
  },
  {
    path: 'filmes',
    component: FilmesComponent,
    title: 'Filmes',
  },
  {
    path: 'nave',
    component: NaveComponent,
    title: 'Nave',
  },
];
