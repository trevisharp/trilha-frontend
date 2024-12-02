import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookData } from '../models/book-data';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  get(): Observable<BookData> {
    return this.http.get<BookData>(this.apiUrl + "/book")
  }

  search(query: string, page: number, limit : number): Observable<BookData> {
    return this.http.get<BookData>(this.apiUrl + "/book?query=" + query + "&page=" + page + "&limit=" + limit)
  }

  getDetails(id: number) : Observable<Book> {
    return this.http.get<Book>(this.apiUrl + "/book/" + id)
  }
}
