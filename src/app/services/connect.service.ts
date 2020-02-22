import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  _onDataHistory: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {
  }

  setHistory(data: any) {
    this._onDataHistory.next(data);
  }



}
