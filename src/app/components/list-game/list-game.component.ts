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
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  constructor(private apiGameService: ApiGameService, private router: Router) {}

  ngOnInit() {
    this.obtenerJuegos();
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

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  
}
