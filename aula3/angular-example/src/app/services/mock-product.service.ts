import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  private nextId = 1;
  private products: Product[] = []

  constructor() {
    this.initIfNeeded();
  }

  private initIfNeeded() {
    let data = localStorage.getItem('mock-product-data');

    if (data !== null) {
      this.products = JSON.parse(data);
      return;
    }

    this.add({
      title: 'banana',
      price: 2.40,
      description: 'Uma saborosa opção para o café da manhã'
    })

    this.add({
      title: 'maçã',
      price: 4.10,
      description: 'Uma saborosa opção para o almoço'
    })

    this.add({
      title: 'goiaba',
      price: 6.00,
      description: 'Uma saborosa opção para o jantar'
    })
  }

  private save() {
    localStorage.setItem('mock-product-data', JSON.stringify(this.products))
  }

  add(product: Product): void {
    product.id = this.nextId;
    this.nextId++;
    this.products.push(product);
    this.save();
  }

  getAll() : Product[] {
    return this.products;
  }

  getById(id: number) : Product | null {
    for (let prod of this.products) {
      if (id === prod.id)
          return prod;
    }
    return null;
  }
}
