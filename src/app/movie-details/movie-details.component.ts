import { Component, OnInit } from '@angular/core';

import bshows from "../../assets/Bengaluru-Theatre.json";
import { NgForm } from '@angular/forms';
import movies from '../../assets/Movies.json';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

export interface movie {
  name:String,
  language:String,
  dim:String,
  rating:String,
  image:String
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movie:movie;
  constructor(private route: ActivatedRoute, private movieService:MovieService, private router:Router) { }
  moviePlace:{
    movie:string,
    place:string
  }
  movieList=movies;
  showList=bshows;
  theatres=["PVR","INOX"];
  theaterSelected="None";

  
  onTheatreSelect(s){
    this.theaterSelected=s;
  }
  ngOnInit() {
    this.moviePlace={
      movie:this.route.snapshot.params['movie'],
      place:this.route.snapshot.params['city']
    }
    for(let i=0;i<this.movieList.length;i++){
      if (this.movieList[i].name==this.moviePlace.movie){
        this.movie=this.movieList[i];

      }
    }
    console.log(this.moviePlace);
  }
  onSubmit(f:NgForm){
    let a={
      theatre:this.theaterSelected,
      date:f.controls.date.value,
      time:f.controls.time.value,
      seats:f.controls.seats.value,
      price:250
    }
    console.log(f);
    console.log("Beforeservice")
    this.movieService.summary(a,this.movie);
    console.log("Afterservice")
    this.router.navigate(['../../../bookingsummary'],{relativeTo:this.route})

    console.log(f.controls.theatre.value);
  }


}
