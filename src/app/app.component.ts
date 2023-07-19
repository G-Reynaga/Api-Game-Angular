import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gerson-Reynaga';

  constructor(private router: Router) {}

  redirectToGameList() {
    this.router.navigate(['/games']);
  }
}
