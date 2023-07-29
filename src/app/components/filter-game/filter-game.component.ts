import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-filter-game',
  templateUrl: './filter-game.component.html',
  styleUrls: ['./filter-game.component.css'],
})
export class FilterGameComponent {
  searchTerm: string = '';
  // showSearchBar: boolean = false;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  //Esta metodo es para que el search solo se vea en la ruta games
  // ngOnInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.showSearchBar = event.url === '/games';
  //     }
  //   });
  // }

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
