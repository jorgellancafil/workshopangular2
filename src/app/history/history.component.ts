import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnChanges {

  list: any = [];

  constructor(private connect: ConnectService) {

    this.connect._onDataHistory.subscribe(res => {
      console.log("HistoryComponent -> connect -> ", res);
      this.setList(res);
    })

  }

  setList(item: any) {
    this.list.push(item);
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
