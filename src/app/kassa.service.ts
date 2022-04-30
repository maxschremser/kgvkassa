import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KassaService {

  order: Position[] = [];
  data: any = {};

  constructor(public http: HttpClient) {
    http.get<Position[]>("assets/data.json").subscribe(data => this.data = data);
  }

  add(pos: Position) {
    this.order.push(pos);
  }

  get drinks() {
    return this.data.drinks;
  }

  get food() {
    return this.data.food;
  }

  get kaffee() {
    return this.data.kaffee;
  }

  get summe() {
    let summe = 0;
    for (let o of this.order) {
      summe += o.preis;
    }
    return summe.toFixed(2);
  }
}

export class Position {
  name: string = "";
  preis: number = 0;

  constructor(name: string, preis: number) {
    this.name = name;
    this.preis = preis;
  }
}
