import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  ObsGet: Observable<any>;

  constructor(private http: HttpClient) {
  }

  exeGet(url: any) {
    console.log("exeget -> ", url);
    return this.http.get(url);
  }



}
