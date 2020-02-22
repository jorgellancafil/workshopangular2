import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'getinfo',
  templateUrl: './getinfo.component.html',
  styleUrls: ['./getinfo.component.scss']
})
export class GetinfoComponent implements OnInit {

  url: any = "www.google.cl";

  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

  getData() {
    console.log("listo para preguntar", this.url);
  }

}
