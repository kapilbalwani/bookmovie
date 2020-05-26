import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMatchheight]'
})
export class MatchheightDirective implements OnInit{

  constructor(private eleRef:ElementRef) { }

  ngOnInit(){
    this.eleRef.nativeElement.style.height='200px';
  }
}
