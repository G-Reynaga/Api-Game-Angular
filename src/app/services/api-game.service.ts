import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class ApiGameService {
  private baseUrl = 'https://www.freetogame.com/api';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  obtenerJuegos(): Observable<Game[]> {
    const url = `${this.proxyUrl}${this.baseUrl}/games`;
    return this.http.get<Game[]>(url);
  }

  filterName(nombre: string): Observable<Game[]> {
    const url = `${this.proxyUrl}${this.baseUrl}/games`;
    const params = { title: nombre };
    return this.http.get<Game[]>(url, { params });
  }

  filterCategory(genero: string): Observable<Game[]> {
    const url = `${this.proxyUrl}${this.baseUrl}/games?category=${genero}`;
    return this.http.get<Game[]>(url);
  }

  filterPlataform(plataforma: string): Observable<Game[]> {
    const url = `${this.proxyUrl}${this.baseUrl}/games?platform=${plataforma}`;
    return this.http.get<Game[]>(url);
  }

  filterCategoryPlatform(
    plataforma: string,
    genero: string
  ): Observable<Game[]> {
    const url = `${this.proxyUrl}${this.baseUrl}/games?platform=${plataforma}&category=${genero}`;
    const params = {
      plataform: plataforma,
      category: genero,
    };
    return this.http.get<Game[]>(url, { params });
  }

  obtenerJuego(id: number): Observable<Game> {
    const url = `${this.proxyUrl}${this.baseUrl}/game?id=${id}`;
    return this.http.get<Game>(url);
  }
}
