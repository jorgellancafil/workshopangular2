import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'getinfo',
  templateUrl: './getinfo.component.html',
  styleUrls: ['./getinfo.component.scss']
})
export class GetinfoComponent implements OnInit {

  url: any = "https://thesimpsonsquoteapi.glitch.me/quotes";
  @Output() outGetInfo = new EventEmitter();

  constructor(private backend: BackendService, private connect: ConnectService) { }

  ngOnInit() {
  }

  getData() {
    console.log("listo para preguntar", this.url);
    this.backend.exeGet(this.url).subscribe(res => {
      this.outGetInfo.emit(res[0]);
      this.connect.setHistory(res[0]);
    })
  }

}
