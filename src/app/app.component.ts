import { Component, OnInit } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));
  books: string[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookList$.subscribe(books => {
      this.books = books;
    })
  }
}
