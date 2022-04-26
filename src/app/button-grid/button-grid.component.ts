import {Component, Input, OnInit} from '@angular/core';
import {KassaService, Position} from "../kassa.service";

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.scss']
})
export class ButtonGridComponent implements OnInit {

  @Input() category = "";

  constructor(public kassa: KassaService) { }

  ngOnInit(): void {
  }

  add(pos: Position) {
    this.kassa.add(pos);
  }

  data(category: string): Position[] {
    switch (category) {
      case "food":
        return this.kassa.food;
      case "drinks":
        return this.kassa.drinks;
      case "kaffee":
        return this.kassa.kaffee;
      default:
        return [];
    }
  }
}
