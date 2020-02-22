//importamos todo lo que vamos a usar
import { Component } from "@angular/core";


@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})

export class MainComponent {

  eventRes: any;

  constructor() {

  }

  receptor(event: any) {
    this.eventRes = event;
  }



}
