import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

export interface summary {
  theatre : String,
  location:String,
  seats:String,
  name:String,
  price:Number,
  date:String,
  time:String
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList;
  private movieUpdated = new Subject<any[]>();
  public movieFinal:any={};
  
  constructor(private authService:AuthService,private httpService: HttpClient) { }

  summary(theaterDetails,movieDetails){
    console.log(theaterDetails);
    console.log(movieDetails);
    console.log(theaterDetails.theatre);
    console.log(typeof(theaterDetails.theatre));
    console.log(this.movieFinal);
    this.movieFinal.theatre=theaterDetails.theatre;
    console.log(this.movieFinal.theatre);
    this.movieFinal.date=theaterDetails.date;
    this.movieFinal.time=theaterDetails.time;
    this.movieFinal.seats=theaterDetails.seats;
    this.movieFinal.location=this.authService.getSelectedCity();
    this.movieFinal.name=movieDetails.name;
    this.movieFinal.price=theaterDetails.price*theaterDetails.seats;
  }

  getMovieFinal(){
    return this.movieFinal;
  }

  getMovies(){
    this.httpService.get('../../assets/Movies.json')
    .pipe(
      map((movieData:any)=>{
        return{
          movies:movieData.map(movie=>{
            return{
              name:movie.name,
              language: movie.language,
              dim: movie.dim,
              rating: movie.rating,
              image: movie.image
            }
          })
        }
      })
    )
    .subscribe(data=>{
      this.movieList=data.movies;
      console.log(typeof(this.movieList));
      console.log(typeof(data.movies));
      this.movieUpdated.next(this.movieList);
    })
  }

  getUpdatedMovieList(){
    console.log("Returning latest movie from service");
    console.log(this.movieList);
    return this.movieUpdated.asObservable();
  }

  sort(c){
    var sorted;
    if(c=="Popularity"){
      sorted=this.movieList.sort(function(a,b){
        return +b.rating-+a.rating;
      });
    }
    else if(c=="Name"){
      sorted=this.movieList.sort(function(a,b){
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
    
    this.movieUpdated.next(this.movieList);
  }
  
}
