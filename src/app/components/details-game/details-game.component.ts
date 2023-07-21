import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiGameService } from 'src/app/services/api-game.service';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css'],
})
export class DetailsGameComponent implements OnInit {
  juego: Game = {
    id: 0,
    title: '',
    genre: '',
    thumbnail: '',
    platform: '',
    description: '',
    minimum_system_requirements: {
      os: '',
      processor: '',
      memory: '',
      graphics: '',
      storage: '',
    },
  };

  constructor(
    private _route: ActivatedRoute,
    private apiGameService: ApiGameService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      const gameId = +param['id'];
      this.obtenerJuego(gameId);
      console.log(param);
    });
  }

  obtenerJuego(gameId: number) {
    this.apiGameService.obtenerJuego(gameId).subscribe(
      (juego) => {
        this.juego = juego;
      },
      (error) => {
        console.log('Error al obtener los detalles del juego', error);
      }
    );
  }
}
