import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiGameService } from 'src/app/services/api-game.service';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  juegos: Game[] = [];
  searchResults: Game[] = [];
  // showNavBar: boolean = false;

  constructor(private apiGameService: ApiGameService, private router: Router) {}

  handleSearch(searchTerm: string) {
    // Realiza las acciones necesarias con el término de búsqueda
    console.log('Término de búsqueda:', searchTerm);

    this.apiGameService.filterName(searchTerm).subscribe(
      (juegos: Game[]) => {
        // Maneja los resultados de la búsqueda
        this.searchResults = juegos.filter((juego: Game) =>
          juego.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log('Resultados de la búsqueda:', this.searchResults);
      },
      (error) => {
        console.log('Error al buscar juegos por nombre:', error);
      }
    );
  }

  //Esta metodo es para que el navBar solo se vea en la ruta games
  // ngOnInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.showNavBar = event.url === '/games';
  //     }
  //   });
  // }
}
