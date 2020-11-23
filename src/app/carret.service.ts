import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CarretService {
  items = [];

  afegirCarret(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  netejarItems() {
    this.items = [];
    return this.items;
  }
}
