import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BookCardComponent } from '../book-card/book-card.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { BookData } from '../models/book-data';
import { BooksService } from '../services/books.service';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-books-page',
  imports: [ MatCardModule, CommonModule, MatInputModule,
    BookCardComponent, MatPaginatorModule, MatDividerModule,
    FormsModule, MatIconModule
  ],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent implements OnInit {

  query = ""
  limit = 50
  page = 0
  books: Observable<BookData> | undefined;

  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.updateBooks();
  }

  updateBooks() {
    this.books = this.service.search(this.query, this.page, this.limit);
  }

  handlePage($event: PageEvent) {
    this.page = $event.pageIndex;
    this.limit = $event.pageSize;
    this.updateBooks();
  }

  setQuery(newQuery: string) {
    this.query = newQuery;
    this.onQueryChange();
  }

  changeCount = 0;
  onQueryChange() {
    this.changeCount++;

    let instantChange = this.changeCount;
    setTimeout(() => {
      if (this.changeCount === instantChange) {
        this.updateBooks();
        this.page = 0;
      }
    }, 500)
  }
}
