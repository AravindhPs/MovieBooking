import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  movieName:string ="";
  theatre:boolean = true;
  timing:boolean = false;
  ticketcount:boolean = false;
  price:boolean = false;
  finalprice:boolean = false;
  ticketsCount:number = 0;
  amount:number = 0;  
  totalFare:number = 0;
  liClicked:boolean = false;
  conformButton = false;
  theatreNames:object = ["Luxe Cinemas","PVR","INOX","SPI Cinemas","Express Avenue","AGS Cinemas","PALAZZO","Sathiyam Cinemas"];
  theatreName:string = this.theatreNames[0];
  showTimings:object = ["10:00AM","02:00PM","06:30PM","10:00PM"];
  time:number = this.showTimings[0];
   prices:object = [{Category: "Balcony Rs",Price: "200"},{Category: "First Class Rs",Price: "150"},{Category: "Second Class Rs",Price: "100"},{Category: "Economy Rs",Price: "60"},];
   counts:object = ["1","2","3","4","5","6"];
   
  constructor(private routes:Router) { }

  ngOnInit() {  
  this.movieName = this.routes.url.split("=")[1];    
  }
  SelectTheatres(theatre){ 
    this.theatreName = theatre;  
    this.timing = true;
  }  

  SelectTiming(timing){ 
    this.time = timing;
    this.ticketcount = true;  
  }

  FinalPage(){
 this.routes.navigate(["finalPage",{movie:this.movieName, theatre:this.theatreName, time:this.time,count: this.ticketsCount,fare: this.amount}]);
  }

  MovieSelectionPage(){
    this.routes.navigate([""]);
  }
  SelectTicketCounts(counts){
    this.ticketsCount = counts;
    this.price = true;
    this.liClicked = true;
  }

  SelectFare(fare){    
    this.amount = fare;
    this.totalFare = this.ticketsCount * this.amount;   
    this.finalprice= true; 
    this.liClicked = true;
    this.conformButton = true;
  }
}
