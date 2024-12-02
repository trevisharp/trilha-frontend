import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartsComponent } from '../starts/starts.component';

@Component({
  selector: 'app-book-detail-page',
  imports: [ MatCardModule, MatListModule, CommonModule, StartsComponent ],
  templateUrl: './book-detail-page.component.html',
  styleUrl: './book-detail-page.component.css'
})
export class BookDetailPageComponent implements OnInit {
  book: Observable<Book> | undefined;

  constructor(private service: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.book = this.service.getDetails(id);
    });
  }

}