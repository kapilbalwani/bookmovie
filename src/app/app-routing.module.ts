import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  {path:"login",component:LoginComponent},
  {path:"movies", canActivate:[AuthGuard], component:MoviesListComponent},
  {path:"movie/:movie/:city",canActivate:[AuthGuard], component:MovieDetailsComponent},
  {path:"bookingsummary",canActivate:[AuthGuard], component:BookingSummaryComponent},
  {path:"checkout",canActivate:[AuthGuard], component:CheckoutComponent}
];

const rm=RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
