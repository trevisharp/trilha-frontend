import { Routes } from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';

export const routes: Routes = [
  { path: '', component: BooksPageComponent },
  { path: 'book/:id', component: BookDetailPageComponent }
];
