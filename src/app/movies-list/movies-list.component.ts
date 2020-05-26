import { Component, OnInit } from '@angular/core';

import movies from '../../assets/Movies.json';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  sortc="Popularity";
  filteredStatus:string="";
  movieList=[];
  constructor(private router:Router,private r:ActivatedRoute,private authService:AuthService,private movieService:MovieService) { }

  onBook(m){
    this.router.navigate(['../movie',m,this.authService.getSelectedCity()],{relativeTo:this.r});
  }
  ngOnInit() {
    this.movieService.getMovies();
    this.movieService.getUpdatedMovieList().subscribe((movies)=>{
      console.log("Got latest movies from service")
      console.log(movies);
      console.log("Before")
      console.log(this.movieList);
      this.movieList=movies;
      console.log("After")
      console.log(this.movieList);
    })
    
  }

  onSearch(f:NgForm){
    console.log(f.controls.filteredStatus.value);
    this.filteredStatus=f.controls.filteredStatus.value;
  }

  onChange(c){
    this.movieService.sort(c);
    console.log(c);
    //this.movieService.getMovies();
    console.log("Fetched");
  }
}
