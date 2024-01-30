import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {

  @Input()
  title : string = "";

  @Input()
  pathUrl : string = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
