import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Movie {
  episode: number;
  title: string;
  releaseDate: string;
  director: string;
}

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatProgressSpinnerModule],
  providers: [HttpClientModule],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss',
})
export class FilmesComponent {
  constructor(private http: HttpClient) {}

  displayedColumns: string[] = [
    'episode_id',
    'title',
    'release_date',
    'director',
  ];

  resultsLength = 0;
  isLoadingResults = true;

  endpoint = 'assets/films.json';
  movies!: Movie[];
  getData() {
    return this.http.get(this.endpoint).subscribe((res) => {
      this.isLoadingResults = false;
      this.movies;

      console.log(res);
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  formatarData(data: string) {
    const dataObj = new Date(data);
    console.log(dataObj);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
