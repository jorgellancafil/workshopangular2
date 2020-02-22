import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() inCard: any;
  dataCard: any;

  constructor() {
    console.log("card constructor");
  }

  ngOnInit() {
    console.log("card iniciado");
  }

  ngOnChanges() {
    console.log("card ha cambiado");
    this.dataCard = this.inCard;
  }

}
