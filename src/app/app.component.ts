import {Component, OnInit} from '@angular/core';
import {MarketService} from "./helpers/market.service";
import {TechnologyService} from "./helpers/technology.service";
import {ProductService} from "./helpers/product.service";
import {Market} from "./model/market";
import {Technology} from "./model/technology";
import {Product} from "./model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gubee-front';
  public markets: Market[] = [];
  public technologies: Technology[] = [];
  public products: Product[] = [];
  selectedMarkets: Market[] = [];
  selectedStack: Technology[] = [];

  constructor(private marketService: MarketService,
              private technologyService: TechnologyService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.marketService.getMarkets().subscribe(resp => {
      this.markets = resp
    });

    this.technologyService.getTechnologies().subscribe(resp => {
      this.technologies = resp;
    });

    this.fetchProducts();
  }

  public fetchProducts() {
    this.productService.getProducts(this.selectedMarkets, this.selectedStack).subscribe(resp => {
      this.products = resp
    });

  }
}
