import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface summary {
  theatre: String,
  location:String,
  seats:String,
  name:String,
  price:Number,
  date:String,
  time:String
}

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router,private r:ActivatedRoute) { }
  movieF:summary;
  
  ngOnInit() {
    this.movieF=this.movieService.getMovieFinal();
  }

  onModify(){
    this.router.navigate(['../movies'],{relativeTo:this.r})
  }

  onConfirm(){
    this.router.navigate(['../checkout'],{relativeTo:this.r})
  }
}
