import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { ListGameComponent } from './components/list-game/list-game.component';
import { DetailsGameComponent } from './components/details-game/details-game.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterGameComponent } from './components/filter-game/filter-game.component';
import { LandingComponent } from './components/landing/landing.component';

//Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListGameComponent,
    DetailsGameComponent,
    NavbarComponent,
    FilterGameComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
