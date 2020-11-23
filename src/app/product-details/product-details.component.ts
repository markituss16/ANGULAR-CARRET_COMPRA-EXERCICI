import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CarretService } from "../carret.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private carretService: CarretService
  ) {}

  afegirCarret(product) {
    this.carretService.afegirCarret(product);
    window.alert("El producte seleccionat ha sigut afegit al carret.");
  }

  getItems() {
    this.carretService.getItems();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productID")];
    });
  }
}
