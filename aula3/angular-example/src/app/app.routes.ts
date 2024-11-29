import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'products',
    component: ProductsPageComponent,
    children: [
      { path: 'add', component: AddProductPageComponent }
    ]
  },
  { path: 'details/:id', component: ProductDetailPageComponent },
  { path: '**', component: NotFoundComponent }
];
