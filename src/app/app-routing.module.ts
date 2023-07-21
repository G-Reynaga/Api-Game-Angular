import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Componentes para las rutas
import { AppComponent } from './app.component';
import { ListGameComponent } from './components/list-game/list-game.component';
import { DetailsGameComponent } from './components/details-game/details-game.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      //Rutas
      { path: '', component: LandingComponent },
      { path: 'games', component: ListGameComponent },
      { path: 'games/:id', component: DetailsGameComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
