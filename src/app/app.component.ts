import { Component } from '@angular/core';
import {KassaService} from "./kassa.service";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kassa';

  constructor(public kassa: KassaService) {
  }

}
