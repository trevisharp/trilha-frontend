import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { MockProductService } from '../services/mock-product.service';

@Component({
  selector: 'app-product-detail-page',
  imports: [],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private router: ActivatedRoute,
    private service: MockProductService
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      let param = params.get('id');
      if (param === null){
        return;
      }

      let id = +param;
      let product = this.service.getById(id);

      if (product === null) {
        return;
      }

      this.product = product;
    });
  }
}
