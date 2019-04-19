import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  value:string = "" ;
  movieName:string = "";
  videoLink:string = "";
  hero:string="";
  heroine:string="";
  director:string = "";  
  musician:string="";
  synopsis:string="";
  constructor(private routes:Router, private route:ActivatedRoute, private hostElement:ElementRef) { }
  BookTickets(){
    this.routes.navigate(["payment",{movie:this.movieName}]);
  }
  ngOnInit() {  
  
  this.value = this.routes.url.split('=')[1];  
  this.movieName = this.value;
   switch(this.value)
    {
      case 'visvasam':
      this.videoLink = "https://www.youtube.com/embed/TBeQpUkU084";
      this.synopsis = "The fourth collaboration between director Siva and superstar Thala Ajith, Viswasam delves into the world of Thooku Durai - a charismatic village chieftain who is beloved by his people and strikes fear in the heart of his enemies.";
      this.hero = "assets/images/Tamil/Visvasam/hero.jpg";
      this.heroine = "assets/images/Tamil/Visvasam/heroine.jpg";
      this.director = "assets/images/Tamil/Visvasam/director.jpg";
      this.musician = "assets/images/Tamil/Visvasam/musician.jpg";
      break;
      case 'irir':
      this.videoLink = "https://www.youtube.com/embed/VXc6gvL1OUg";
      this.synopsis = 'Ispade Rajavum Idhaya Raniyum chronicles the whirlwind romance between Gowtham and Tara, who are drawn to each other despite their differences. Will the relationship survive the troubles caused by their contrasting personalities?';
      this.hero = "assets/images/Tamil/IRIR/hero.jpg";
      this.heroine = "assets/images/Tamil/IRIR/heroine.jpg";
      this.director = "assets/images/Tamil/IRIR/director.jpg";
      this.musician = "assets/images/Tamil/IRIR/musician.jpg";
      break;
      case 'Petta':
      this.videoLink = "https://www.youtube.com/embed/FCB0ZfQ9Rzs";
      this.synopsis = 'Though he works as a hostel warden, there is more to Kaali than meets the eye. Things take an interesting turn when Kaalis path crosses with a group of dreaded gangsters.';
      this.hero = "assets/images/Tamil/Petta/hero.jpg";
      this.heroine = "assets/images/Tamil/Petta/heroine.jpg";
      this.director = "assets/images/Tamil/Petta/director.jpg";
      this.musician = "assets/images/Tamil/Petta/musician.jpg";
      break;
      case 'sathru':
      this.videoLink = "https://www.youtube.com/embed/NyOIDKrVsjc";
      this.synopsis = 'A five-member gang of youngsters kidnaps children for ransom. However, there kidnapping comes to a jolting halt when an honest police inspector decides to bust the gang. Will he be able to arrest them within 24 hours?';
      this.hero = "assets/images/Tamil/Sathru/hero.jpg";
      this.heroine = "assets/images/Tamil/Sathru/heroine.jpg";
      this.director = "assets/images/Tamil/Sathru/director.jpg";
      this.musician = "assets/images/Tamil/Sathru/musician.jpg";
      break;
      case 'lkg':
      this.videoLink = "https://www.youtube.com/embed/xk7t408VZAY";
      this.synopsis = 'Lalgudi Karupaiah Gandhi aka LKG is a small-time politician who harbours the humble dream of being the state`s chief minister. Streetsmart, silver-tongued and crafty, he will go to any lengths to win in this political game of thrones!';
      this.hero = "assets/images/Tamil/LKG/hero.jpg";
      this.heroine = "assets/images/Tamil/LKG/heroine.jpg";
      this.director = "assets/images/Tamil/LKG/director.jpg";
      this.musician = "assets/images/Tamil/LKG/musician.jpg";
      break;
      case 'boomerang':
      this.videoLink = "https://www.youtube.com/embed/pyeclr-ZmHo";
      this.synopsis = 'Boomerang is a Tamil movie starring Atharvaa Murali and Megha Akash in prominent roles. It is an action romance thriller directed by R Kannan.';
      this.hero = "assets/images/Tamil/Boomerang/hero.jpg";
      this.heroine = "assets/images/Tamil/Boomerang/heroine.jpg";
      this.director = "assets/images/Tamil/Boomerang/director.jpg";
      this.musician = "assets/images/Tamil/Boomerang/musician.jpg";
      break;
      case 'DhilukkuDhuddu2':
      this.videoLink = "https://www.youtube.com/embed/WVyGfGHcT_0";
      this.synopsis = 'The sequel to the hit 2016 film follows the story of a fun-loving, troublemaker named Viji. After he falls for a girl who hides a strange secret, Vijis life turns into a spooky roller-coaster ride in this horror comedy which stars Santhanam, Shritha Sivadas, Urvashi and Mottai Rajendran in pivotal roles.';
      this.hero = "assets/images/Tamil/DhilukkuDhuddu2/hero.jpg";
      this.heroine = "assets/images/Tamil/DhilukkuDhuddu2/heroine.jpg";
      this.director = "assets/images/Tamil/DhilukkuDhuddu2/director.jpg";
      this.musician = "assets/images/Tamil/DhilukkuDhuddu2/musician.jpg";
      break;
      case 'june':
      this.videoLink = "https://www.youtube.com/embed/kP4vEzIv2lI";
      this.synopsis = 'The film follows the life story of a girl named June from 16 years of her age until she turned 26, thereby giving an insight into those ten years of her life.';
      this.hero = "assets/images/Malayalam/June/hero.jpg";
      this.heroine = "assets/images/Malayalam/June/heroine.jpg";
      this.director = "assets/images/Malayalam/June/director.jpg";
      this.musician = "assets/images/Malayalam/June/musician.jpg";
      break;
      case 'Lucifer':
      this.videoLink = "https://www.youtube.com/embed/x1-Ya0NZQso";
      this.synopsis = 'Directed by Prithviraj Sukumaran and written by Murali Gopy, Lucifer delves deep into that unexplored abyss of what appears to be normal to those eyes that refuse to see beyond the seen. In God`s own country, the supreme leader of the ruling party dies, leaving a huge vacuum in not only the electoral and leadership sphere of the party but also that of the state. In the inevitable succession squabble and the power struggle that ensues, the thin line that separates good and bad becomes irrecoverably blurred and out of this seemingly endless mayhem, emerge forces that are hitherto unheard of.';
      this.hero = "assets/images/Malayalam/Lucifer/hero.jpg";
      this.heroine = "assets/images/Malayalam/Lucifer/heroine.jpg";
      this.director = "assets/images/Malayalam/Lucifer/director.jpg";
      this.musician = "assets/images/Malayalam/Lucifer/musician.jpg";
      break;
      case 'Kumbalanginights':
      this.videoLink = "https://www.youtube.com/embed/3P4BFBSafF0";
      this.synopsis = 'The film revolves around four brothers who share a love-hate relationship with each other. Frankys elder brothers, Saji, Bobby and Bony lead a messed up life with their downright arrogance, differences, and disagreements with each other. Each one deals with the struggle of his own. Their relationship progresses to another level when Saji, Bony, and Franky decide to help Bobby stand by his love. Frankys wish for a beautiful home cuddles hope.';
      this.hero = "assets/images/Malayalam/Kumbalanginights/hero.jpg";
      this.heroine = "assets/images/Malayalam/Kumbalanginights/heroine.jpg";
      this.director = "assets/images/Malayalam/Kumbalanginights/director.jpg";
      this.musician = "assets/images/Malayalam/Kumbalanginights/musician.jpg";
      break;
      case 'VarikkuzhiyileKolapathakam':
      this.videoLink = "https://www.youtube.com/embed/XL7azCS8buQ";
      this.synopsis = 'Set in a small village, the story of Varikkuzhiyile Kolapathakam revolves around the life of a young Parish priest, Vincent Kombana (played by Amith Chakkalakkal) and the 40 families that live in the village. The father is smart, loving, and affectionate towards the people and in return, they too respect and love him a lot. All goes well for the villagers, until, one day the father witnesses a murder in the village post which the criminals keep the father locked up in a secret location to hide the crime. Will the priest reveal the truth to the villages? Will he bring the criminal to justice?';
      this.hero = "assets/images/Malayalam/VarikkuzhiyileKolapathakam/hero.jpg";
      this.heroine = "assets/images/Malayalam/VarikkuzhiyileKolapathakam/heroine.jpg";
      this.director = "assets/images/Malayalam/VarikkuzhiyileKolapathakam/director.jpg";
      this.musician = "assets/images/Malayalam/VarikkuzhiyileKolapathakam/musician.jpg";
      break;
      case 'Suryakantham':
      this.videoLink = "https://www.youtube.com//embed/nEBGu3Lqv2A";
      this.synopsis = 'The story of an eccentric woman whose snap decisions cause problems for everyone in her life.';
      this.hero = "assets/images/Telugu/hero.jpg";
      this.heroine = "assets/images/Telugu/heroine.jpg";
      this.director = "assets/images/Telugu/director.jpg";
      this.musician = "assets/images/Telugu/musician.jpg";
      break;
      case 'captainmarvel':
      this.videoLink = "https://www.youtube.com/embed/WIbe-PmR5vk";
      this.synopsis = 'Set in the 1990s, Marvel Studios` "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe`s most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.';
      this.hero = "assets/images/English/CaptainMarvel/hero.jpg";
      this.heroine = "assets/images/English/CaptainMarvel/heroine.jpg";
      this.director = "assets/images/English/CaptainMarvel/director.jpg";
      this.musician = "assets/images/English/CaptainMarvel/musician.jpg";
      break;
      case 'Dragon':
      this.videoLink = "https://www.youtube.com/embed/naW9U8MiUY0";
      this.synopsis = 'What began as an unlikely friendship between an adolescent Viking and a fearsome Night Fury dragon has become an epic trilogy spanning their lives. In this next chapter, Hiccup and Toothless will finally discover their true destinies: the village chief as ruler of Berk alongside Astrid, and the dragon as leader of his own kind. As both ascend, the darkest threat they have yet faced-as well as the appearance of a female Night Fury-will test the bonds of their relationship like never before.';
      this.hero = './assets/images/English/Dragon/hero.jpg';
      this.heroine = "assets/images/English/Dragon/heroine.jpg";
      this.director = "assets/images/English/Dragon/director.jpg";
      this.musician = "assets/images/English/Dragon/musician.jpg";
      break;
      case 'wonderpark':
      this.videoLink = "https://www.youtube.com/embed/VML6rQWssSk";
      this.synopsis = 'Wonder Park tells the story of a magnificent amusement park where the imagination of a wildly creative girl named June comes alive.';
      this.hero = "assets/images/English/WonderPark/hero.jpg";
      this.heroine = "assets/images/English/WonderPark/heroine.jpg";
      this.director = "assets/images/English/WonderPark/director.jpg";
      this.musician = "assets/images/English/WonderPark/musician.jpg";
      break;      
    }
    
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = this.videoLink;  
  }
}
