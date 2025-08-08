import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  public endpoint = 'assets/films.json';
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(this.endpoint);
  }
}
