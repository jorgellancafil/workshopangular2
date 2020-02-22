import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'getinfo',
  templateUrl: './getinfo.component.html',
  styleUrls: ['./getinfo.component.scss']
})
export class GetinfoComponent implements OnInit {

  url: any = "www.google.cl";

  constructor() { }

  ngOnInit() {
  }

  getData() {
    console.log("listo para preguntar", this.url);
  }

}
