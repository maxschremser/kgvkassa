import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KassaService {

  order: Position[] = [];

  constructor() {
  }

  add(pos: Position) {
    this.order.push(pos);
  }

  get data() {
    return {"drinks": this.drinks, food: this.food, kaffee: this.kaffee};
  }

  get drinks() {
    return [{name: "1/8", preis: 2.5}, {name: "Schnaps", preis: 2}, {name: "Überschwemmung", preis: 3.5}];
  }

  get food() {
    return [new Position("Weisswürstel", 2.5), {name: "Leberkäse", preis: 1.5}, {
      name: "Currywurst",
      preis: 2.5
    }, {name: "Wurstbrot", preis: 2.5}, {name: "Käsebrot", preis: 1.5}];
  }

  get kaffee() {
    return [{name: "Kaffee", preis: 2}, {name: "Kuchen", preis: 1}];
  }

  get summe() {
    let summe = 0;
    for (let o of this.order) {
      summe += o.preis;
    }
    return summe;
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
