import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card-responsive.component.css']
})
export class SmallCardComponent implements OnInit {

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
