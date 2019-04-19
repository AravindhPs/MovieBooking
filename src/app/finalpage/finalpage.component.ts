import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'finalpage',
  templateUrl: './finalpage.component.html',
  styleUrls: ['./finalpage.component.css']
})
export class FinalpageComponent implements OnInit {

  constructor(private routes:Router, private route:ActivatedRoute) { }
  movie:string = "";
   theatre:string = "";
   time:string = "";
   count:number = 0;
   price:number = 0;  
   id:number = 0;
   lang:string = "";
   pic:string = "";
   date:number = new Date().getDate();
   month:number = new Date().getMonth()+1;
   year:number = new Date().getFullYear(); 
  

  ngOnInit() {
    this.route.params.subscribe(params => {this.movie = params['movie'], this.theatre = params['theatre']; this.time = params['time'];this.count = params['count'];this.price = params['fare'];});            
     this.id = Math.floor(Math.random() * (999999999 - 100000000)) + 10000000;    
     switch(this.movie)
     {
      case 'visvasam':
      this.pic = "assets/images/Tamil/Visvasam/visvasam.jpg";
      this.lang = "Tamil";
      break;
      case 'irir':      
      this.pic = "assets/images/Tamil/IRIR/irir.jpg";
      this.lang = "Tamil";
      break;
      case 'Petta':
      this.pic = "assets/images/Tamil/Petta/Petta.jpg";
      this.lang = "Tamil";
      break;
      case 'sathru':
      this.pic = "assets/images/Tamil/Sathru/sathru.jpg";
      this.lang = "Tamil";
      break;
      case 'lkg':
      this.pic = "assets/images/Tamil/LKG/lkg.jpg";
      this.lang = "Tamil";
      break;
      case 'boomerang':
      this.pic = "assets/images/Tamil/Boomerang/boomerang.jpg";
      this.lang = "Tamil";
      break;
      case 'DhilukkuDhuddu2':
      this.pic = "assets/images/Tamil/DhilukkuDhuddu2/DhilukkuDhuddu2.jpg";
      this.lang = "Tamil";
      break;
      case 'june':
      this.pic = "assets/images/Malayalam/June/june.jpg";
      this.lang = "Malayalam";
      break;
      case 'Lucifer':
      this.pic = "assets/images/Malayalam/Lucifer/Lucifer.jpg";
      this.lang = "Malayalam";
      break;
      case 'Kumbalanginights':
      this.pic = "assets/images/Malayalam/Kumbalanginights/Kumbalanginights.jpg";
      this.lang = "Malayalam";
      break;
      case 'VarikkuzhiyileKolapathakam':
      this.pic = "assets/images/Malayalam/VarikkuzhiyileKolapathakam/VarikkuzhiyileKolapathakam.jpg";
      this.lang = "Malayalam";
      break;
      case 'captainmarvel':
      this.pic = "assets/images/English/CaptainMarvel/captainmarvel.jpg";
      this.lang = "English";
      break;
      case 'Dragon':
      this.pic = "assets/images/English/Dragon/Dragon.jpg";
      this.lang = "English";
      break;
      case 'wonderpark':
      this.pic = "assets/images/English/WonderPark/wonderpark.jpg";
      this.lang = "English";
      break;
      case 'Suryakantham':
      this.pic = "assets/images/Telugu/Suryakantham.jpg";
      this.lang = "Telugu";
      break;
     }
  }
}
