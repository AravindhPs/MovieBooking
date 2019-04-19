import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit  {
title = 'Movie-Ticket-Booking-Application';
  constructor(private router:Router){    
  }  

  GetMovie(name):void{ 
    this.router.navigate(["detail",{movie: name}]);
  }

  ngOnInit() {
  }

  tamil:boolean = true;
  english:boolean = false;
  malayalam:boolean = false;
  telugu:boolean = false;
  languages:object = [{name:'Tamil',lang:'tamil'},
                      {name:'English',lang:'english'},
                      {name:'Telugu',lang:'telugu'},
                      {name:'Malayalam',lang:'malayalam'}];
   
  getMovieImage(languagename){

    switch(languagename)
    {
      case 'tamil':
      this.tamilShow();
      break;
      case 'english':
      this.englishShow();
      break;
      case 'malayalam':
      this.malayalamShow();
      break;
      case 'telugu':
      this.teluguShow();
      break;
    }

  }
  tamilShow(){
    this.tamil = true;
    this.malayalam = false;
    this.english = false;
    this.telugu = false;
  }

  malayalamShow(){
    this.malayalam = true;
    this.tamil = false;
    this.english = false;
    this.telugu = false;
  }

  englishShow(){
    this.english = true;
    this.tamil = false;
    this.malayalam = false;
    this.telugu = false;
  }

  teluguShow(){
    this.telugu = true;
    this.tamil = false;
    this.malayalam = false;
    this.english = false;
  }
}
