import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { NaveComponent } from './components/naves/naves.component';

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
    path: 'naves',
    component: NaveComponent,
    title: 'Naves',
  },
];
