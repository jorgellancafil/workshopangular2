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
      if (res) {
        this.setList(res);
      }

    })

  }

  setList(item: any) {
    item["active"] = 0;
    this.list.push(item);
    this.evaluateLast();
  }

  evaluateLast() {
    if (this.list) {
      let count: any = this.list.length;
      console.log("count -> ", count);

      for (let i in this.list) {
        this.list[i].active = 0;
      }

      this.list[count - 1]["active"] = 1;
    }


  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
