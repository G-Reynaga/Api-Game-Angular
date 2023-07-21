import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGameService } from 'src/app/services/api-game.service';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css'],
})
export class ListGameComponent implements OnInit {
  juegos: Game[] = []; // Lista completa de juegos;
  filteredGames: Game[] = [];
  genres: string[] = [];
  platforms: string[] = [];

  //Esto es para el paginado
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  constructor(private apiGameService: ApiGameService, private router: Router) {}

  ngOnInit() {
    this.apiGameService.obtenerJuegos().subscribe(
      (juegos) => {
        this.juegos = juegos;
        this.filteredGames = juegos;
        this.extractGenerosAndPlataformas(juegos);
      },
      (error) => {
        console.log('Error al cargar los datos', error);
      }
    );
  }

  obtenerJuegos() {
    this.apiGameService.obtenerJuegos().subscribe(
      (juegos) => {
        this.juegos = juegos;
        console.log('Los Juegos son:', this.juegos);
      },
      (error) => {
        console.log('Error al cargar los datos', error);
      }
    );
  }

  private extractGenerosAndPlataformas(juegos: Game[]) {
    this.genres = [...new Set(juegos.map((juego) => juego.genre))];
    this.platforms = [...new Set(juegos.map((juego) => juego.platform))];
  }

  filterByGenero(genero: string) {
    if (genero === 'todos') {
      this.filteredGames = this.juegos;
    } else {
      this.apiGameService.filterCategory(genero).subscribe(
        (juegosFiltrados) => {
          this.filteredGames = juegosFiltrados;
        },
        (error) => {
          console.log('Error al filtrar por género', error);
        }
      );
    }
  }

  filterByPlataforma(plataforma: string) {
    if (plataforma === 'todos') {
      this.filteredGames = this.juegos;
    } else {
      this.apiGameService.filterPlataform(plataforma).subscribe(
        (juegosFiltrados) => {
          this.filteredGames = juegosFiltrados;
        },
        (error) => {
          console.log('Error al filtrar por plataforma', error);
        }
      );
    }
  }
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
