import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css' , './big-card-responsive.component.css']
})

export class BigCardComponent implements OnInit {

  @Input()
  imagePath : string = "../../../assets/images/newspaper.png";
  
  @Input()
  title : string = "";
  
  @Input()
  description : string = "";

  @Input()
  urlLink : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url:string){
    if (url !== undefined && url.length > 0 ){
      window.open(url, "_blank");
    } else {
      alert('link unavailable');
    }
  }

}
