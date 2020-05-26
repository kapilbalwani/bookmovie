import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  moviePrice:Number;
  ngOnInit() {
    this.moviePrice=this.movieService.getMovieFinal().price;
  }

}
