#inout y outputs
@Input() example: any;
@Output() example2 = new EventEmitter();

#BehaviorSubject
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class ConnectService {

  _onDataHistory: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {
  }

  setHistory(item: any) {
    this._onDataHistory.next(item);
  }

}


#HTTP_INTERCEPTORS
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {

  catchEvent: any;

  constructor(
    public _route: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    this.catchEvent = req;

    return next.handle(req).pipe(

      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

          //this._remote.backendloading(false);
          console.log("working back");

          return event;
        }
      }),

      catchError((error) => {

        //this._remote.backendloading(false);
        switch (error.status) {
          case 401: {
            //this._snackBar.open("Sesión ha expirado");
            return;

          }

          case 500: {

          }
          default: {

            return throwError(error);
          }
        }
      })
    )
  }

  redirectLogin() {

  }
}
