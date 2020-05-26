import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FilterMoviePipe } from './movies-list/filter-movie.pipe';
import { HighlightDirective } from './movies-list/highlight.directive';
import { MatchheightDirective } from './movie-details/matchheight.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    BookingSummaryComponent,
    CheckoutComponent,
    FilterMoviePipe,
    HighlightDirective,
    MatchheightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
