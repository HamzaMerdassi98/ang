import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-item',
  templateUrl: './appareil-item.component.html',
  styleUrls: ['./appareil-item.component.css']
})
export class AppareilItemComponent implements OnInit {

  appareilName="Machine à laver";
  appareilStatus = "allumé";
  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilStatus
  }

}
