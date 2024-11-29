import { Component, OnInit } from '@angular/core';
import { MockProductService } from '../services/mock-product.service';
import { Product } from '../models/product';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [ RouterOutlet ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = [];
  constructor(private service: MockProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.service.getAll();
  }

  addNew() {
    this.router.navigate(['products/add'])
  }
}
