import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { StartsComponent } from '../starts/starts.component';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  imports: [ MatExpansionModule, StartsComponent ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input()
  book: Book = {
    id: 0,
    title: 'Nome do Livro',
    author: 'Autor do Livro',
    pages: 0,
    quantity: 0,
    price: 0,
    year: 0,
    avaliation: 0,
    genres: []
  }

}
