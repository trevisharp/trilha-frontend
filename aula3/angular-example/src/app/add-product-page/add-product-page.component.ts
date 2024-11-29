import { Component, OnInit } from '@angular/core';
import { MockProductService } from '../services/mock-product.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-page',
  imports: [ ReactiveFormsModule ],
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent implements OnInit {
  productForm : FormGroup | undefined;

  constructor (private service: MockProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      description: new FormControl(''),
      price: new FormControl(0.01, [ Validators.min(0.01), Validators.max(1000) ])
    })
  }

  submit() {
    if (this.productForm?.invalid) {
      return;
    }

    this.service.add(this.productForm?.value);
  }
}
