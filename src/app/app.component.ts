import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from './services/book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  books: string[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private _bookServive: BookService
  ) {
    this.subscriptions.push(this._bookServive.bookList$.subscribe(books => this.books = books));
  }

  ngOnDestroy(): void {
    this.subscriptions.map(sub => sub.unsubscribe())
  }
}
