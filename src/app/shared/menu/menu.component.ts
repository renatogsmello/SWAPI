import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'menu',
  standalone: true,
  imports: [MatToolbarModule, MatListModule, RouterModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public menu = [
    {
      name: 'Inicio',
      route: '',
    },
    {
      name: 'Filmes',
      route: 'filmes',
    },
    {
      name: 'Naves',
      route: 'naves',
    },
  ];
}
